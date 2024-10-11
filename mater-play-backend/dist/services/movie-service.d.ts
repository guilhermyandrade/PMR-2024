import { Movie } from "src/entities/movie-entity";
import { Repository } from "typeorm";
export declare class MovieService {
    private repository;
    constructor(repository: Repository<Movie>);
    findAll(): Promise<Movie[]>;
    findById(id: string): Promise<Movie>;
}
