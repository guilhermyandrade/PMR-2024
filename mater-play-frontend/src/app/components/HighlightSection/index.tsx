import { Box, Container, Stack, Typography, Button } from "@mui/material"
import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { MoviesService } from "../../services/movies-service"
import { IMovie } from "../../@libs/types"

//type HightLightProps = {
//    poster: string
//}

function HightLightSection() {

    const params = useParams();
    const [movie, setMovie] = useState<IMovie>({} as IMovie);

    useEffect(() => {
        
        const movieId = (params.id) ? (params.id) : '';

        MoviesService.getMoviesById(movieId)
        .then(result => {
            if (result) setMovie(result)
        })
        .catch(error => { console.log(error) })


    }, [params]);

    return (

        <Box>
            <Container>

                <Stack
                    direction="row"
                >

                    <img src={`assets/${movie.poster}`}/>


                <Stack
                    display="flex"
                    sx={{
                        justifyContent: "center",
                        marginLeft: "3rem"
                    }}
                >

                    <Typography
                            variant="h4"
                        >
                            {movie.title}
                        </Typography>

                        <Typography 
                            variant="subtitle2"
                        >
                            <span
                                style={{
                                    borderWidth: "1px",
                                    borderStyle: "solid",
                                    padding: "0.2rem",
                                    marginRight: "0.3rem"
                                }}
                            >
                                {movie.ageRating}
                            </span>
                            
                            {movie.genres && movie.genres.map(genre => (genre.name)).join(", ")}

                        </Typography>

                        <Typography  // Título da Sinopse
                            variant="subtitle1"
                            sx={{
                                paddingTop: "2rem",
                                marginBottom: "0.5rem"
                            }}
                        >
                            {movie.description}
                        </Typography>

                        <Typography  // Texto da Sinopse
                            variant="body2"
                        >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis tenetur eveniet deleniti ipsam vel repellendus maxime, assumenda rem quidem voluptates placeat! Perspiciatis iusto culpa rem obcaecati impedit delectus ipsam ipsa!.
                        </Typography>

                        <Stack
                            direction="row"
                            gap={1}
                            sx={{
                                paddingY: "1rem"
                            }}
                        >
                            <Button variant="outlined">Assistir</Button>
                            <Button variant="outlined">Detalhes</Button>
                        </Stack>

                    </Stack>

                </Stack>
                
            </Container>
        </Box>
    
    )
}

export default HightLightSection