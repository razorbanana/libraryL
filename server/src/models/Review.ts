import { Rating } from "../dto/review.dto";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Review extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: Rating,
        default: Rating.ZERO
    })
    rating: number;

    @Column({type: "text"})
    review: string;
}
