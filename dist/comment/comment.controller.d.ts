import { CommentService } from "./comment.service";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    create(createCommentDto: CreateCommentDto, user: number): Promise<import("./entities/comment.entity").CommentEntity>;
    findAll(): Promise<import("./entities/comment.entity").CommentEntity[]>;
    findCommUser(id: number): Promise<import("./entities/comment.entity").CommentEntity[]>;
    findAllByPostId(id: number): Promise<{
        items: import("./entities/comment.entity").CommentEntity[];
    }>;
    findOne(id: string): Promise<import("./entities/comment.entity").CommentEntity>;
    update(id: string, updateCommentDto: UpdateCommentDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
