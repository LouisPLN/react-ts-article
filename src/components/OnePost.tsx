import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostsType } from "../interfaces";

type PostParams = {
  id: string;
};

export const OnePost = () => {
  const navigate = useNavigate();

  const { id } = useParams<PostParams>();

  const [onePost, setOnePost] = useState<PostsType | null>(null);

  useEffect(() => {
    const getOnePost = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data: PostsType = await response.json();
      setOnePost(data);
    };
    getOnePost();
  }, [id]);
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/1087727/pexels-photo-1087727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{onePost?.title}</h1>
          <p className="mb-5">{onePost?.body}</p>
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/articles`)}
          >
            Retour à la page articles
          </button>
        </div>
      </div>
    </div>
  );
};
