import { DataSource } from "typeorm";
import config from "./config/config";
import { Review } from "./models/Review";
import { Author, Book, BookAuthor } from "./models/Book";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: config.db.host,
    port: Number(config.db.port),
    username: config.db.username,
    password: config.db.password,
    database: config.db.database,
    synchronize: true,
    logging: true,
    entities: [Review, Book, Author, BookAuthor],
    subscribers: [],
    migrations: [],
})
