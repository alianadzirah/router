import { useLocation, Link } from "react-router-dom";

const DetailPage = (props) => {
  const location = useLocation();
  const state1 = location.state;
  console.log(state1);

  return (
    <>
      <h1>This is Detail page</h1>
      {state1 && (
        <div>
          <h3>Passed data:</h3>
          <p>Message: {state1.message1}</p>
          <p>Message: {state1.message2}</p>
        </div>
      )}
      <hr />
      <Link to="/">Go Home</Link>
    </>
  );
};

export default DetailPage;