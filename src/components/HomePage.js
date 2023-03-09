// src/HomePage.js
import { Link } from "react-router-dom";

const HomePage = (props) => {
  // this is for the first Link
  const data1 = {
    message: "Welcome to KindaCode.com",
  };

  return (
    <>
      <h1>Home Page</h1>
      <p>
        <Link to="/about" state={data1}>
          Go to About Page (Link #1)
        </Link>
      </p>
      </>
  );
};

export default HomePage;