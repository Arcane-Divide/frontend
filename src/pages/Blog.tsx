import { Box } from '@mui/material';
import {FC} from 'react';
import image from '../assets/img/bgImgNew.jpg';

const Blog: FC = () => {

    return (
        <Box style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}>
            
        </Box>
    )
}

export default Blog;