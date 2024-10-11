import { Movie } from "src/entities/movie-entity";
import { MovieService } from "src/services/movie-service";
export declare class MovieController {
    private service;
    constructor(service: MovieService);
    findAll(): Promise<Movie[]>;
    findById(id: string): Promise<Movie>;
}
