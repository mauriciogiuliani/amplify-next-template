// import Typography from '@mui/material/Typography';
"use client"; // Add this at the very top of your component file


import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Box, Container, createTheme, FormControl, FormLabel, InputLabel, TextField, ThemeProvider } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid2 from "@mui/material/Grid2";

import { grey, lightGreen, teal, green } from '@mui/material/colors';



export default function Component() {

    const theme = createTheme({
        palette: {
            primary: {
                main: teal[900],  // Replace this with your preferred green shade
            },
        },
    });

    return (
        


        <ThemeProvider theme={theme}>

            {/* <header  style={{
                    height: "5rem",
                    display: "flex",
                    color: lightGreen[300],
                    justifyContent: 
                }}>

                <div>
                  
                    <Button variant="text">
                        Dúvidas Frequentes
                    </Button>
                    <Button variant="text">
                        Beneficios
                    </Button>

                    <Button variant="text">
                        O Projeto
                    </Button>

                </div>
            </header> */}

            <main >
                <section style={{ backgroundColor: teal[800] }}>



                    <Container sx={{
                        marginTop: "10rem",
                        marginBottom: "10rem"
                    }}>
                        <Grid2 container
                            spacing={12}
                        >

                            <Grid2 size={{ xs: 12, md: 6 }}
                            //  sx={{justifyContent: "center", textAlign: "center"}} 
                            >


                                <Typography variant="h3" gutterBottom color={grey[50]} align='center'>
                                    Sistema de Adesão
                                    ao <br></br>
                                    Mercado Livre de Energia
                                </Typography>

                                <Typography variant="h5" gutterBottom color={grey[50]} align='center'>
                                    Faça parte dessa revolução energética

                                </Typography>

                                <Typography variant="h5" gutterBottom color={grey[50]} align='center'>
                                    Descubra neste projeto experimental como o Mercado Livre de Energia pode transformar sua conta de energia

                                </Typography>

                                <Typography variant="h5" gutterBottom color={lightGreen[300]} align='center'>
                                    Desfrute da liberdade de escolher seu fornecedor de energia com possibilidade de reduzir seus custos com energia.

                                </Typography>






                            </Grid2>




                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <Card variant="outlined">
                                    <CardContent>
                                        {/* <InputLabel >
                                    Entre com o Numero da UC
                                    </InputLabel> */}

                                        <Container>

                                            <Box
                                                component="form"
                                                // onSubmit={handleSubmit}
                                                noValidate
                                                sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
                                            >
                                                <FormControl>
                                                    <FormLabel htmlFor="email">Número da UC</FormLabel>
                                                    <TextField
                                                        id="numeroUC"
                                                        autoFocus
                                                        required
                                                        fullWidth
                                                        variant="outlined"
                                                    />
                                                </FormControl>

                                                <FormControl>
                                                    <FormLabel htmlFor="email">Email</FormLabel>
                                                    <TextField
                                                        id="numeroUC"
                                                        autoFocus
                                                        required
                                                        fullWidth
                                                        variant="outlined"
                                                    />
                                                </FormControl>

                                            </Box>
                                        </Container>
                                        {/* <TextField id="outlined-basic" label="Entre com Nº UC" variant="outlined" /> */}
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>

                                </Card>
                            </Grid2>

                        </Grid2>


                    </Container>

                </section>


                <section style={{ backgroundColor: teal[900] }}>
                    <Container sx={{
                        marginTop: "10rem",
                        marginBottom: "10rem"
                    }}>

                        <Grid2 container
                            spacing={1}
                        >
                            AA
                        </Grid2>
                    </Container>
                </section>
            </main>
        </ThemeProvider>
    )
}

