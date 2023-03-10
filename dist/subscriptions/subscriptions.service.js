"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const subscription_entity_1 = require("./entities/subscription.entity");
let SubscriptionsService = class SubscriptionsService {
    constructor(repository) {
        this.repository = repository;
    }
    async subscribe(userId, channelId) {
        const repo = await this.repository.findOne({
            where: {
                subscriber: { id: userId },
                channel: { id: channelId },
            },
        });
        if (repo) {
            const unSub = await this.repository.delete(repo.id);
            return { message: "Unsubscribe", unSub };
        }
        else {
            const sub = await this.repository.save({
                channel: { id: channelId },
                subscriber: { id: userId },
            });
            return { message: "Subscribe", sub };
        }
    }
    async getAllSubscriptionsUser(userId) {
        const sub = await this.repository.find({
            select: {
                id: true,
                channel: { id: true, fullName: true },
            },
            where: { subscriber: { id: userId } },
        });
        const arr = sub.map((item) => {
            delete item.channel.password;
            delete item.subscriber.password;
            return item;
        });
        return sub;
    }
    async getAllSubscribersUser(userId) {
        const sub = await this.repository.find({
            select: {
                id: true,
                channel: { id: true, fullName: true },
            },
            where: { channel: { id: userId } },
        });
        const arr = sub.map((item) => {
            delete item.channel.password;
            delete item.subscriber.password;
            return item;
        });
        return sub;
    }
};
SubscriptionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(subscription_entity_1.SubscriptionEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SubscriptionsService);
exports.SubscriptionsService = SubscriptionsService;
//# sourceMappingURL=subscriptions.service.js.map