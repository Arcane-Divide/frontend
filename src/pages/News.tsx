import { Box, Container, Divider, Paper, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import PostComponent from "../components/Post";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectPosts } from "../store/news/newsReducer";
import { Post } from "../store/news/types";
import image from "../assets/img/bgImgNew.jpg";

const News: FC = () => {
  const posts: Post[] = useAppSelector(selectPosts);

  useEffect(() => {}, [posts]);

  return (
    <Paper
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
    >
      <Box justifyContent="center" sx={{ padding: 8 }}>
        <Box sx={{ display: "flex", pb: 4 }} justifyContent="center">
          <Typography variant="h1">Latest News</Typography>
        </Box>
        <Divider orientation='horizontal' style={{width: '100%'}} sx={{mb: 7}}/>
        {posts.map((p, index) => {
          return (
            <PostComponent
              key={index}
              title={p.title}
              date={p.date}
              img={`http://localhost:3080/${p.img}`}
              content={p.content}
            />
          );
        })}
      </Box>
    </Paper>
  );
};

export default News;
