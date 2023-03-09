import { useLocation } from 'react-router-dom';
import './App.css';

const Detail = (props) => {
  const location2 = useLocation();
  const state3 = location2.state;
  console.log(state3);

  return (
    <>
    <div className='App'>
      <h1>Your submitted details</h1>
      {state3 && (
        <div>
          <p>{state3.message3}</p>
          <p>{state3.message4}</p>
          <p>{state3.message5}</p>
          <p>{state3.message6}</p> 
        </div>
      )}
    </div>
    </>
  );
};

export default Detail;