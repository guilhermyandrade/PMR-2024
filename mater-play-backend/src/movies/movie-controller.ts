import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseUUIDPipe, Put, Query } from "@nestjs/common";
import { Category } from "src/categories/category-entity";
import { Movie } from "src/movies/movie-entity";
import { MovieService } from "src/movies/movie-service";

@Controller("movies")
export class MovieController {
    constructor(
        private service: MovieService
    ) {}

    @Get()

    findAll( @Query("movieId") movieId?: string): Promise<Movie[]> {
        if (movieId) {
            return this.service.findByCategory({
                id: Number(movieId)
            } as Category)
        }
        
        return this.service.findAll()
    }

    @Get(":id")

    async findById(@Param("id", new ParseUUIDPipe()) id: string): Promise<Movie> {

        const found = await this.service.findById(id)

        if ( !found ) { 
            throw new HttpException("Movie not found", HttpStatus.NOT_FOUND)
        }

        return found
    }

    create(@Body() movie: Movie): Promise<Movie> {
        return this.service.save(movie)
    }

    @Put(":id")
    async update( 
        @Param("id", ParseUUIDPipe) id: string, 
        @Body() movie: Movie
    ): Promise<Movie> {
        
        console.log(id)

        const found = await this.service.findById(id)
        
        //console.log(found)

        if ( !found ) { 
            throw new HttpException("Movie not found", HttpStatus.NOT_FOUND)
        }

        movie.id = found.id

        return this.service.save(movie)
    }


    @Delete(":id")
    @HttpCode(204)
    async remove(
        @Param("id", ParseUUIDPipe) id: string
    
    ): Promise<void> {
        const found = await this.service.findById(id)

        if ( !found ) { 
            throw new HttpException("Movie not found", HttpStatus.NOT_FOUND)
        }

        return this.service.remove(id)
    }
}