import React from "react";

const Click = () => {
    function handleSubmit(e) {
      e.preventDefault();
      console.log('Back to Zero');
    }
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Click</button>
      </form>
    );
  };

  export default Click;
