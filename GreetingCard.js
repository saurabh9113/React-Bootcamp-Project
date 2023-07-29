import React from 'react';

const GreetingCard = ({ name, occasion }) => {
  return (
    <div className="greeting-card">
      <h2>{`Hello, ${name}!`}</h2>
      <p>{`Wishing you a ${occasion}!`}</p>
    </div>
  );
};

export default GreetingCard;
