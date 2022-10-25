import { useState } from "react";
import reactLogo from "./assets/react.svg";
import KakaoMap from "./components/Map";
import Map from "./components/Map";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{}}>
      <KakaoMap />
    </div>
  );
}

export default App;
