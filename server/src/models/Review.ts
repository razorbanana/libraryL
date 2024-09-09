import { Rating } from "../dto/review.dto";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./Book";


@Entity()
export class Review{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        type: "enum",
        enum: Rating,
        default: Rating.ZERO
    })
    rating: number;

    @Column({type: "text"})
    review: string;

    @ManyToOne((type) => Book, (book) => book.reviews)
    book: Book;
}
