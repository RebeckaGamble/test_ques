import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link"

function singlePhoto() {
  const [photo, setPhoto] = useState();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function getPhoto() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      );
      const data = await res.json();
      setPhoto(data);
    }
    getPhoto();
  }, [id]); //change based on id

  return (
    <div className="w-full flex flex-col items-center">
      <p className="font-semibold text-lg py-4">Single photo page</p>
      {photo && (
        <>
          <p>{photo.id}</p>
          <img src={photo.url} alt={photo.title} />
          <Link href="/" >Back home</Link>
        </>
      )}
    </div>
  );
}

export default singlePhoto;
