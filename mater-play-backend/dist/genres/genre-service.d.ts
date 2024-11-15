import { Genre } from 'src/genres/genre-entity';
import { Repository } from 'typeorm';
export declare class GenreService {
    private repository;
    constructor(repository: Repository<Genre>);
    findAll(): Promise<Genre[]>;
    findById(id: string): Promise<Genre>;
    save(genre: Genre): Promise<Genre>;
    remove(id: string): Promise<void>;
}
