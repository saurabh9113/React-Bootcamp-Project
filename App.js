import React from 'react';
import GreetingCard from './GreetingCard';

const App = () => {
  return (
    <div>
      <h1>My Greeting Card App</h1>
      <GreetingCard name="John" occasion="Happy Birthday" />
      <GreetingCard name="Jane" occasion="Merry Christmas" />
    </div>
  );
};

export default App;
