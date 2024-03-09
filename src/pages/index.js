// 6. React router med foto-länkar 5p
//todo: Visa på sidan: 10 thumbnails (små foton) från detta api: https://jsonplaceholder.typicode.com/photos/
// Api:et ger tillbaka en array med foto-objekt.
//
//! Url:en till varje thumbnail finns i "thumbnailUrl" i varje foto-objekt.
//todo: När man klickar på fotot ska man komma till en sida som visar det större fotot som
// finns i "url" för varje foto-objekt.
//
//! Om man skickar med id:et för fotot i länken kan man hämta info om just det fotot genom att
// anropa api:et med det id:et. Så här: `https://jsonplaceholder.typicode.com/photos/${id}`
// För id 12 blir alltså anropet: https://jsonplaceholder.typicode.com/photos/12

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Question7 from "./question7_test2/Question7";

export default function Home() {
  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => {
    async function getPhotos() {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos/");
      const data = await res.json();
      setThumbnails(data.slice(0, 10));
    }
    getPhotos();
  }, []);

  return (
    <main className="px-4 w-full">
      <h2 className="font-semibold pb-4 text-lg">Question 7. - test 2</h2>
      <div className="mb-10">
          <Question7 />
      </div>
      <h2 className="font-semibold pb-4 text-lg">Question 6. - test 1</h2>
      <div className="max-w-[800px] mx-auto">
        <ul className="flex flex-wrap justify-center gap-4">
          {thumbnails.map((photo) => {
            return (
              <li key={photo.id}>
                <Link href={`/photo/${photo.id}`}>
                  <img src={photo.thumbnailUrl} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
