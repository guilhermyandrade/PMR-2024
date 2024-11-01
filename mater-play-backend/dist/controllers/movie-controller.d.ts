import { Movie } from "src/entities/movie-entity";
import { MovieService } from "src/services/movie-service";
export declare class MovieController {
    private service;
    constructor(service: MovieService);
    findAll(categoryId?: string): Promise<Movie[]>;
    findById(id: string): Promise<Movie>;
    create(movie: Movie): Promise<Movie>;
    update(id: string, movie: Movie): Promise<Movie>;
    remove(id: string): Promise<void>;
}
