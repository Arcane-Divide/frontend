import { Box, Paper } from '@mui/material';
import {FC} from 'react';
import image from '../assets/img/bgImgNew.jpg';

const Tour: FC = () => {

    return (
        <Paper style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', height: '100vh'}}>
            
        </Paper>
    )
}

export default Tour;