import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ title }) => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <>
      <h1> {title} </h1>
      <h2> {counter} </h2>

      <div className="btn">
        <button onClick={handleAdd}> + 1 </button>
        <button onClick={handleSubtract}> - 1 </button>
        <button onClick={handleReset}> Reset </button>
      </div>
    </>
  );
};

CounterApp.propTypes = {
  title: PropTypes.string.isRequired,
};

CounterApp.defaultProps = {
  title: "CounterApp",
};
