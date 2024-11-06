import Stack from "@mui/material/Stack";
// import Typography from '@mui/material/Typography';

import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid2";

export default function Component() {
    const items = [
        {
            icon: <SettingsSuggestRoundedIcon sx={{ color: 'text.secondary' }} />,
            title: 'Adaptable performance',
            description:
                'Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.',
        },
        {
            icon: <ConstructionRoundedIcon sx={{ color: 'text.secondary' }} />,
            title: 'Built to last',
            description:
                'Experience unmatched durability that goes above and beyond with lasting investment.',
        },
        {
            icon: <ThumbUpAltRoundedIcon sx={{ color: 'text.secondary' }} />,
            title: 'Great user experience',
            description:
                'Integrate our product into your routine with an intuitive and easy-to-use interface.',
        },
        {
            icon: <AutoFixHighRoundedIcon sx={{ color: 'text.secondary' }} />,
            title: 'Innovative functionality',
            description:
                'Stay ahead with features that set new standards, addressing your evolving needs better than the rest.',
        },
    ];


    // const Card = styled(MuiCard)(({ theme }) => ({
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignSelf: 'center',
    //     width: '100%',
    //     padding: theme.spacing(4),
    //     gap: theme.spacing(2),
    //     boxShadow:
    //         'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    //     [theme.breakpoints.up('sm')]: {
    //         width: '450px',
    //     },
    //     ...theme.applyStyles('dark', {
    //         boxShadow:
    //             'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    //     }),
    // }));


    return (
        <main>
            <Stack direction="row"
                spacing={2}
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <Stack
                    sx={{ flexDirection: 'column', alignSelf: 'center', gap: 4, maxWidth: 450 }}
                >
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {/* <SitemarkIcon /> */}tt
                    </Box>
                    {items.map((item, index) => (
                        <Stack key={index} direction="row" sx={{ gap: 2 }}>
                            {item.icon}
                            <div>
                                <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {item.description}
                                </Typography>
                            </div>
                        </Stack>
                    ))}
                </Stack>

                <Card variant="outlined">
                    <CardContent>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                            benevlent
                        </Typography>
                        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Stack>

            <Grid container spacing={2}>
                <Grid size={{ xs: 6, md: 8 }}>
                    xs=6 md=8
                </Grid>
                <Grid size={{ xs: 6, md: 4 }}>
                    xs=6 md=4
                    
                </Grid>
                <Grid size={{ xs: 6, md: 4 }}>
                    xs=6 md=4
                </Grid>
                <Grid size={{ xs: 6, md: 8 }}>
                    xs=6 md=8
                </Grid>
            </Grid>

        </main>
    )
}

