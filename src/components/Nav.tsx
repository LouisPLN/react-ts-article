import React from "react";
import { useNavigate } from "react-router-dom";
import { Themes } from "./Themes";

export const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <p
          className="btn btn-ghost normal-case text-xl"
          onClick={() => navigate("/")}
        >
          Accueil
        </p>
        <p
          className="btn btn-ghost normal-case text-xl"
          onClick={() => navigate("/articles")}
        >
          Articles
        </p>
      </div>
      <div className="flex-none"><Themes /></div>
    </div>
  );
};
