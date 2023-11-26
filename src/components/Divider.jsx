import React from 'react';

const Divider = () => {
  const dividerStyle = {
    width: '100%', 
    borderBottom: '1px solid #ccc', 
    margin: '10px 0', 
  };

  return (
    <div style={dividerStyle}></div>
  );
};

export default Divider;
