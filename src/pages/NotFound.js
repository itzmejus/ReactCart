import React from "react";
import "../styles/NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <nav className="nav" style={{ justifyContent: "center" }}>
        <h2 className="nav__h2">404 Not Found</h2>
      </nav>
      <section className="section">
        <div className="section__image">
          <img
            className="image__img"
            src="https://i.postimg.cc/8Pwq7YjY/Scarecrow.png"
            alt="404 Not Found Image"
          />
        </div>
        <div className="section__text" >
          <h1 className="text__h1">I Have Bad News For You</h1>
          <p className="text__p">
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <Link to="/" >
            <button className="text__btn" type="button" >
              Back to homepage
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
