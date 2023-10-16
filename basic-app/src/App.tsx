import React from 'react';
import { Button } from 'component-library';

function App() {
  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <Button onClick={() => alert('I was clicked')}>Click me</Button>
    </div>
  );
}

export default App;
