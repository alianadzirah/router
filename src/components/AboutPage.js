// src/AboutPage.js
import { Fragment } from "react";
import { useLocation, Link } from "react-router-dom";
import './App.css';

const AboutPage = (props) => {
  const location = useLocation();
  const state = location.state;
  console.log(state);

  // this is for the second Link
  const data2 = {
    message1: state.message,
    message2: "Just another message",
  };


  return (
    <>
      <h1>Home Page</h1>
      <p>
        <Link to="/detaill" state={data2}>
          Go to Detail Page (Link #1)
        </Link>
      </p>
      </>
  );
};

export default AboutPage;