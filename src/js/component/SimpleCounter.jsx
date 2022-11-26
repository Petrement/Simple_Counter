import React from 'react';
import PropTypes from "prop-types";
import Click from "./Click.jsx";

const SimpleCounter = (props) => {
    return (<>
        <div className="bigCounter">
        <div><i className="fas fa-clock"></i></div>
        <div>{Math.floor(props.counter / 100000) % 10}</div>
        <div>{Math.floor(props.counter / 10000) % 10}</div>
        <div>{Math.floor(props.counter / 1000) % 10}</div>
        <div>{Math.floor(props.counter / 100) % 10}</div>
        <div>{Math.floor(props.counter / 10) % 10}</div>
        <div>{props.counter % 10}</div>
    </div>
  
    <Click></Click>
    </>
      );
};

SimpleCounter.propTypes = {
    counter: PropTypes.number
}
export default SimpleCounter;