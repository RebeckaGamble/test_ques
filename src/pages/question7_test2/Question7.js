/* 7. Next.js med Post-länkar 5p
todo: Visa på sidan: 10 post-titlar från detta API: https://jsonplaceholder.typicode.com/posts/
API:et ger tillbaka en array med post-objekt.

Titeln på varje post finns i "title" i varje post-objekt.
todo: När man klickar på post-titeln ska man komma till en sida som visar hela posten,
inklusive titel och innehåll ("body") för den specifika posten.

Om man skickar med id:et för posten i länken kan man hämta info om just den posten genom att
anropa API:et med det id:et. Så här: https://jsonplaceholder.typicode.com/posts/${id}
För id 12 blir alltså anropet: https://jsonplaceholder.typicode.com/posts/12

Steg för att genomföra uppgiften:

1. Starta ett nytt Next.js-projekt.

2. Skapa en huvudkomponent för att visa de första 10 post-titlarna. 

3. Skapa dynamiska routes för varje post genom att använda en fil som heter [id].js i en 
posts-mapp under pages.

4. Visa post-data på den dynamiska sidan, inklusive titel och innehåll. */

import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

const Question7 = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      const data = await response.json();
      // console.log(data);
      setPosts(data.slice(0, 10));
    }

    getPosts();
  }, []);

  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.id} className="flex flex-col gap-2 font-semibold">
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </div>
        );
      })}
    </>
  );
};

export default Question7;
