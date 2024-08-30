// src/components/PostsComponent.jsx
import React from 'react';
import { useQuery } from 'react-query';

// Function to fetch posts from the API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function PostsComponent() {
  // Using useQuery to fetch data
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts);

  // Display loading message while data is being fetched
  if (isLoading) return <div>Loading...</div>;

  // Display error message if there is an error
  if (isError) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      {/* Button to refetch data */}
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {/* Render list of posts */}
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
