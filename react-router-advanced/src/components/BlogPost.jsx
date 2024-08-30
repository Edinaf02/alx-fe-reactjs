// src/components/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams(); // Access the dynamic parameter 'id'

  return <div><h2>Blog Post {id}</h2></div>;
}

export default BlogPost;
