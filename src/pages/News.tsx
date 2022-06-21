import { Box, Container } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import PostComponent from "../components/Post";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectPosts } from "../store/news/newsReducer";
import { Post } from '../store/news/types';


const News: FC = () => {
  const posts: Post[] = useAppSelector(selectPosts);
  const [newsPosts, setNewsPosts] = useState<Post[]>([]);

  useEffect(() => {
    setNewsPosts(posts);
  }, [posts]);

  return (
    <Container>
        <Box sx={{}}>
            {posts.map((p, index) => {
                return <PostComponent 
                            key={index} 
                            title={p.title} 
                            date={p.date} 
                            img={`http://localhost:3080/${p.img}`} 
                            content={p.content} 
                        />
            })}
        </Box>
    </Container>
        
  );
};

export default News;
