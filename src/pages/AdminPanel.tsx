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
import { Link } from "react-router-dom";
import PostForm from "../components/PostForm";
import UserLogin from "../components/UserLogin";
import { selectIsLoggedIn } from "../store/app/appReducer";
import { useAppSelector } from "../store/hooks";

const AdminPanel: FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const buttonStyle = {
    m: 2,
    width: '14em',
    color: '#FFFFFF',
    fontFamily: 'Prompt',
    '&:hover': {
      backgroundColor: 'red'
    }
  }

  return (
    <Box
      justifyContent="center"
      sx={{ display: "flex", minHeight: "100vh", maxWidth: "80%", pl: '5em' }}
    >
      {isLoggedIn ? (
        <Box
          alignItems="center"
          sx={{
            display: "grid",
            gap: 6,
            gridAutoColumns: "3fr",
            gridTemplateRows: "repeat(4, 250px)",
            ml: 15
          }}
        >
          <Box sx={{ gridRow: "1", gridColumn: "1" }}>
            <h3 style={{ paddingRight: "2em" }}>Edit News:</h3>
          </Box>
          <Box sx={{ gridRow: "1", gridColumn: "2" }}>
            <Button component={Link} to="/admin/create_news_post" variant='outlined' sx={buttonStyle}>
              Create Post
            </Button>
            <Button variant='outlined' sx={buttonStyle}>Delete Post</Button>
          </Box>
          <Box sx={{gridRow: '2', gridColumn: '1'}}>
            <h3 style={{ paddingRight: "2em" }}>Edit Blog:</h3>
          </Box>
          <Box sx={{gridRow: '2', gridColumn: '2'}}>
            <Button component={Link} to="/admin/create_news_post" variant='outlined' sx={buttonStyle}>
              Create Post
            </Button>
            <Button variant='outlined' sx={buttonStyle}>Delete Post</Button>
          </Box>

          <Box sx={{ gridRow: "3", gridColumn: "1" }}>
            <h3 style={{ paddingRight: "2em" }}>Edit Tour:</h3>
          </Box>
          <Box sx={{ gridRow: "3", gridColumn: "2" }}>
            <Button component={Link} to="/admin/create_news_post" variant='outlined' sx={buttonStyle}>
              Add New Tour
            </Button>
            <Button variant='outlined' sx={buttonStyle}>Edit Tour</Button>
            <Button variant='outlined' sx={buttonStyle}>Delete Tour</Button>
          </Box>

          <Box sx={{ gridRow: '4', gridColumn: '1'}}>
            <h3 style={{ paddingRight: "2em" }}>Edit Merch:</h3>
            </Box>
            <Box sx={{gridRow: '4', gridColumn: '2'}}>
            <Button component={Link} to="/admin/create_news_post" variant='outlined' sx={buttonStyle}>
              Add New Merch Item
            </Button>
            <Button variant='outlined' sx={buttonStyle}>Edit Merch Item</Button>
            <Button variant='outlined' sx={buttonStyle}>Delete Merch Item</Button>
          </Box>
        </Box>
      ) : (
        <UserLogin />
      )}
    </Box>
  );
};

export default AdminPanel;
