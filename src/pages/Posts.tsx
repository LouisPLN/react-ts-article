import React, { useEffect, useState } from "react";
import { Postlist } from "../components/Postlist";
import { PostsType } from "../interfaces";
import { Nav } from "../components/Nav";

export const Posts: React.FC = () => {
  const [numberOfPosts, setNumberOfPosts] = useState(5);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfPosts(+e.target.value);
    localStorage.setItem("numberOfPosts", e.target.value);
  };

  const localOrStateNumber =
    localStorage.getItem("numberOfPosts") || numberOfPosts;

  const [allPosts, setAllPosts] = useState<PostsType[] | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${localOrStateNumber}`
      );
      const data: PostsType[] = await response.json();
      setAllPosts(data);
    };
    getPosts();
  }, [localOrStateNumber]);

  return (
    <>
      <Nav />
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-2xl p-20">Page Articles</h1>
        <div className="flex flex-col justify-center">
          <label htmlFor="posts" className="label mb-2">
            Nombre de publication {localOrStateNumber}
          </label>
          <input
            type="range"
            min={1}
            max={60}
            defaultValue={localOrStateNumber}
            onChange={onChange}
            className="range range-secondary w-[300px]"
          />
        </div>
        <Postlist allPosts={allPosts} />
      </div>
    </>
  );
};
