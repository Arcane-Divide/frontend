import { Box, Button } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import PostForm from "../components/PostForm";
import { selectIsLoggedIn } from "../store/app/appReducer";
import { useAppSelector } from "../store/hooks";

const CreateNews: FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const buttonStyle = {
    m: 2,
    width: "14em",
    color: "#FFFFFF",
    fontFamily: "Prompt",
    "&:hover": {
      backgroundColor: "red",
    },
  };

  return (
    <Box>
      {isLoggedIn ? (
        <>
          <Box sx={{ display: "grid", gridAutoColumns: "2fr" }} alignItems='center'>
            <Box sx={{ gridColumn: "1" }}>
              <Button component={Link} to="/admin" sx={buttonStyle}>
                Back to admin panel
              </Button>
            </Box>
            <Box sx={{gridColumn: '2'}}>
                <h3>Create News Post:</h3>
            </Box>

            
          </Box>
          <PostForm />
        </>
      ) : (
        <h2>Sorry! Permission denied</h2>
      )}
    </Box>
  );
};

export default CreateNews;
