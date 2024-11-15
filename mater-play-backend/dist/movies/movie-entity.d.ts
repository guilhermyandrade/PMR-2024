import { Category } from "../categories/category-entity";
import { Genre } from "src/genres/genre-entity";
export declare class Movie {
    id: string;
    title: string;
    description: string;
    ageRating: string;
    poster: string;
    categories: Category[];
    genres: Genre[];
}
