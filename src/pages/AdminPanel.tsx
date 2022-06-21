import {
  Box,
  Button,
  Grid,
  Select,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import PostForm from "../components/PostForm";

const AdminPanel: FC = () => {
  
    return (
        <Box justifyContent='center' sx={{display: 'center' }}>
            <h3 style={{paddingRight: '2em'}}>Create News Post:</h3>
            <PostForm />
        </Box>
    )
};

export default AdminPanel;
