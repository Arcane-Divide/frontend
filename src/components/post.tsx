import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, {FC} from 'react';
import image from '../assets/img/bgImg.jpeg';

interface PostProps {
    title: string;
    date: string;
    img?: string;
    content: string;
    children?: React.ReactNode;
}


const Post: FC<PostProps> = (props) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'))

    return (
        <Box sx={{flexGrow: 1}} >
            <Grid container >
                <Grid item xs={12} md={12}>
                    <Typography variant='h3'>
                        {props.title}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} display='flex' justifyContent={'flex-end'}>
                    <Typography>
                        {props.date}
                    </Typography>
                </Grid>
                <Divider orientation='horizontal' style={{width: '100%'}}/>
                <Grid item xs={12} md={7} display='flex' justifyContent='center' sx={{ }} >
                    <img width='100%' src={props.img} />
                </Grid>
                {matches ? 
                <Divider flexItem orientation='vertical' />
                :
                <Divider orientation='horizontal' style={{width: '100%'}}/>
                }
                <Grid item xs={12} md={4} display='flex' justifyContent='center' sx={{pl: '2em'}}>
                    <p>{props.content}</p>
                </Grid>
            </Grid>
            <Box sx={{flexGrow: 1, height: '2em'}}>

            </Box>
        </Box>
        
    )
}

export default Post;