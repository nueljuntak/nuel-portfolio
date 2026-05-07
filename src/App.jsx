import { useState } from "react";
import Opening from "./components/opening/Opening";
import Home from "./pages/Home";

function App() {
  const [done, setDone] = useState(false);

  return done ? <Home /> : <Opening onFinish={() => setDone(true)} />;
}

export default App;