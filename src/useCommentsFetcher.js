import { useState, useEffect } from 'react';

const useCommentsFetcher = (postId = 1) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const get = async () => {
      const result = await fetchComments();
      console.log(result);
      setComments(result);
    }
    get();
  }, [])

  async function fetchComments() {
    const result = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    return result.json();
  }

  return comments;
}

export default useCommentsFetcher;