import { Box, Container, Stack, Typography } from "@mui/material";
import MovieCard from "../MovieCard";

const movies = [
    {poster: 'house-of-dragons-poster.jpg'},
    {poster: 'gyEnhITeHLky85XJxuTPqniPrzE.jpg'},
    {poster: '2zmTngn1tYC1AvfnrFLhxeD82hz.jpg'},
    {poster: '7qOSKoOAPgemYhBwbJgBWcCxPWZ.jpg'},
    {poster: '9h2KgGXSmWigNTn3kQdEFFngj9i.jpg'},
    {poster: 'cQLJT6hTXio0md94oBsSWADOECf.jpg'},
    {poster: 'dYwihSnQmCVuIQbuG9n18BK5Iqd.jpg'},
    {poster: 'gyEnhITeHLky85XJxuTPqniPrzE.jpg'},
    {poster: 'house-of-dragons-poster.jpg.jpg'},
    {poster: 'mAbuZuS4CqlTI6lvWIxPRHppbVs.jpg'},
    {poster: 'xeeF1KWSz8EEUl8RBz64qRnxm7V.jpg'},
    {poster: 'xNSsIyZcbESWBm42VTo09zbjS6s.jpg'},
];

type SectionProps = {
    sectionTitle: string;
}
function Section( {sectionTitle}: SectionProps) {

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
                    <MovieCard poster={"assets/"+item.poster} />
                ))}
            
            </Stack>

            </Container>

        </Box>   
    )

}

export default Section