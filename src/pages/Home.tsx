import { Box, Grid } from '@mui/material';
import React, {FC} from 'react';
import pic from '../assets/img/redTriangle.png';
import image from '../assets/img/bgImgNew.jpg';


const Home: FC = () => {

    return (
        <Box sx={{}} >
            <Grid container style={{backgroundSize: 'cover', backgroundImage: `url(${image})`, height: '100vh', width: 'auto'}}>
                <Grid item sx={{flexGrow: 1}}>
                    <img src={pic} width='100%' height='auto'/>
                </Grid>
                <Grid item >
                    
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home;