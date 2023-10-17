import { useState } from 'react';
import { ThemeProvider, Button } from 'components-library';
import 'components-library/style.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
    </ThemeProvider>
  )
}

export default App
