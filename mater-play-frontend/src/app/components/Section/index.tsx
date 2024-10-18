import { Box, Container, Stack, Typography } from "@mui/material";
import MovieCard from "../MovieCard";
import { useEffect, useState } from "react";
import { IMovie } from "../../@libs/types";
import { MoviesService } from "../../services/movies-service";



type SectionProps = {
    sectionTitle: string;
}
function Section( {sectionTitle}: SectionProps) {

    const [movies, setMovies] = useState<IMovie[]>([])

    useEffect(() => {

        MoviesService.getMovies().then(
            result => {
                setMovies(result)
            }
        )

    }, [])
    
    return (
        <Box>

            <Container>

            <Typography
                variant="h6"
                sx={{
                    fontWeight: 400,
                    paddingTop: "2rem"
                }}
            >
                {sectionTitle}
            </Typography>

            <Stack
                direction="row"
                gap={0.5}
                sx={{
                    overflowX: "hidden",
                    whiteSpace: "nowrap",
                    paddingY: "1rem"
                }}

            >
                {movies.map(item => (
                    <MovieCard key={item.id} poster={"assets/"+item.poster} />
                ))}
            
            </Stack>

            </Container>

        </Box>   
    )

}

export default Section