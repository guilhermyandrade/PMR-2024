import { Box, Container, Stack, Typography, Button } from "@mui/material"

//type HightLightProps = {
//    poster: string
//}

function HightLightSection() {

    return (

        <Box>
            <Container>

                <Stack
                    direction="row"
                >

                    <img src="assets/house-of-dragons-poster.jpg"/>


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
                            A Casa do Dragão
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
                                16
                            </span>
                            Aventura, Fantasia, Ação
                        </Typography>

                        <Typography  // Título da Sinopse
                            variant="subtitle1"
                            sx={{
                                paddingTop: "2rem",
                                marginBottom: "0.5rem"
                            }}
                        >
                            Sinopse
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