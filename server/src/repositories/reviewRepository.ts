import { AppDataSource } from "../data-source";
import { Review } from "../models/Review";

export const reviewRepository = AppDataSource.getRepository(Review);

