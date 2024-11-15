import { Genre } from "src/genres/genre-entity";
import { GenreService } from "src/genres/genre-service";
export declare class GenreController {
    private service;
    constructor(service: GenreService);
    findAll(): Promise<Genre[]>;
    findById(id: string): Promise<Genre>;
    create(genre: Genre): Promise<Genre>;
    update(id: string, genre: Genre): Promise<Genre>;
    remove(id: string): Promise<void>;
}
