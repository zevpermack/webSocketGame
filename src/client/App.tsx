import './App.css';

import { useState } from 'react';
import { GameMain } from '@client/views/GameMain';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GameMain />
    </>
  );
}

export default App;
