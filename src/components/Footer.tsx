import { Box, Grid, Link, Typography } from "@mui/material";
import React, { FC } from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer: FC = () => {
  return (
    <Box
      style={{
        position: "sticky",
        height: "4em",
        background: "#000000",
        width: "100%",
        color: "gray",
      }}
      sx={{ pl: 5, pt: 2.5, mt: 'auto' }}
    >
      <Grid container >
        <Grid item sx={{ display: "flex", flexGrow: 1 }}>
          <CopyrightIcon />

          <Typography fontFamily='Prompt' >2022 Arcane Divide</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", justifyContent: "flex-end", pr: 3 }}>
            <Typography fontFamily='Prompt' >
                Site by Josh Kroslowitz
            </Typography>
        </Grid>
        <Grid item sx={{ display: "flex", justifyContent: "flex-end", pr: 3 }}>
            <Link href='https://github.com/citizensnipz' color='inherit'>
                <GitHubIcon />
            </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
