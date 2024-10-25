import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Movie } from "src/entities/movie-entity";
import { Repository } from "typeorm";

@Injectable()
export class MovieService {
    
    constructor (
        @InjectRepository(Movie)
        private repository: Repository<Movie>,
    ) {
        
    }
    findAll(): Promise<Movie[]> {
        return this.repository.find({})
    }

    findById(id: string): Promise<Movie> {
        return this.repository.findOneBy({id: id})
    }

    save(movie: Movie): Promise<Movie> {
        return this.repository.save(movie)
    }

    async remove(id: string): Promise<void> {
        await this.repository.delete(id)
    }
}