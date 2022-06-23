import { Box, Button, Grid, TextField } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { setIsLoggedIn } from "../store/app/appReducer";

const UserLogin: FC = () => {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);

  const checkValid = (text: string) => {
    if (username == '' || password == '' || text == '') {
      setIsValid(false)
    } else {
      setIsValid(true)
    }
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    fetch("http://localhost:3080/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: username,
        password: password,
      }),
    }).then(response => {return response.json()}
    ).then( data => {data.valid ? dispatch(setIsLoggedIn(true)) : alert('username or password was entered incorrectly, please try again')});
  };

  return (
    <Box
      sx={{
        display: "grid",
        backgroundColor: "#FFFFFF",
        p: 4,
        gridAutoColumns: "1fr",
        minWidth: "50vh",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Box sx={{ gridColumn: "1" , pb: 3}}>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            onChange={(e) => {setUsername(e.target.value); checkValid(e.target.value);}}
            fullWidth
          />
        </Box>
        <Box sx={{ gridColumn: "1" }}>
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            onChange={(e) => {setPassword(e.target.value); checkValid(e.target.value);}}
            fullWidth
          />
        </Box>
        <Box sx={{ gridColumn: "1" }}>
          <Button
            variant="contained"
            type="submit"
            disabled={!isValid}
            sx={{ fontFamily: "Prompt", mt: "2em", width: "100%" }}
          >
            Login
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default UserLogin;
