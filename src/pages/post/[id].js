import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const singlePost = () => {
  const [post, setPost] = useState();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function getPost() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await res.json();
      setPost(data);
    }
    getPost();
  }, [id]); //change based on id

  if (!post) {
    return <div>No posts</div>;
  }

  return (
    <>
      <div className="w-full">
        <div className="px-4 flex flex-col items-center">
          <p className="font-semibold text-lg py-4">Single post page</p>
          {post && (
            <>
              <p>{post.id}</p>
              <div>
                <h2 className="text-xl font-semibold text-center py-2">{post.title}</h2>
                <p>{post.body}</p>
              </div>
              <Link href="/" className="pt-6 underline">Back home</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default singlePost;
