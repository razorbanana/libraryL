import { Column, Entity, EntitySchema, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Review } from './Review';

@Entity()
export class Book {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type: "varchar", length: 64})
    title: string;

    @Column({type: "text", nullable: true})
    description: string;

    @OneToMany((type) => BookAuthor, (bookAuthor) => bookAuthor.book, {cascade: true})
    bookAuthors: BookAuthor[];

    @Column({type: "varchar", length: 10})
    publishedDate: string;

    @OneToMany((type) => Review, (review) => review.book, {cascade: true})
    reviews: Review[];
}

@Entity()
export class Author {


    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type: "varchar", length: 32})
    name: string;

    @Column({type:"text"})
    description: string;

    @OneToMany((type) => BookAuthor, (bookAuthor) => bookAuthor.author, {cascade: true})
    authorBooks: BookAuthor[];
}

@Entity()
export class BookAuthor {
    @ManyToOne(() => Book, (book) => book.bookAuthors, { onDelete: 'CASCADE' })
    @PrimaryColumn({ type: 'varchar', name: 'bookId' })
    book!: Book;

    @ManyToOne(() => Author, (author) => author.authorBooks, { onDelete: 'CASCADE' })
    @PrimaryColumn({ type: 'varchar', name: 'authorId' })
    author!: Author
}