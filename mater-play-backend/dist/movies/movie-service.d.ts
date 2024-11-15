import { Category } from "src/categories/category-entity";
import { Movie } from "src/movies/movie-entity";
import { Repository } from "typeorm";
export declare class MovieService {
    private repository;
    constructor(repository: Repository<Movie>);
    findAll(): Promise<Movie[]>;
    findById(id: string): Promise<Movie>;
    findByCategory(category: Category): Promise<Movie[]>;
    save(movie: Movie): Promise<Movie>;
    remove(id: string): Promise<void>;
}
