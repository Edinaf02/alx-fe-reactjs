// src/components/PostsComponent.jsx
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

function PostsComponent() {
  const { data, error, isLoading, isError, isFetching } = useQuery(
    'posts', // Query key
    fetchPosts, // Fetch function
    {
      cacheTime: 1000 * 60 * 10, // Cache data for 10 minutes
      staleTime: 1000 * 60 * 5,  // Data is fresh for 5 minutes
      refetchOnWindowFocus: true, // Refetch data when the window regains focus
      keepPreviousData: true, // Keep previous data while fetching new data
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Posts</h2>
      {isFetching && <span>Refreshing...</span>}
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
