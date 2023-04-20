import { useEffect, useState } from "react";

function App() {
  const [result, setResult] = useState(null);
  

  return (
    <div>
      <h1>The result is:</h1>
      <p>{result}</p>
    </div>
  );
}

export default App;
