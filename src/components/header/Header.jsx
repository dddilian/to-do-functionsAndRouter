import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark d-flex justify-content-center" id="nav">
      <Link to={"/"}>Create To Do</Link>
      <Link to={"/to-do-list"}>List</Link>
    </nav>
  );
}
