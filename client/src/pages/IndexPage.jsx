import { useEffect, useState } from "react"
import Post from "../components/Post"

const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://typequest-server.onrender.com/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);

  return (
    <>
      {posts.length > 0 && posts.map(post => (
        // eslint-disable-next-line react/jsx-key
        <Post {...post} />
      ))}
    </>
  )
}

export default IndexPage