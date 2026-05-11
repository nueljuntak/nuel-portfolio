import { useState } from "react";

import Opening from "./components/opening/Opening";
import Home from "./pages/Home";

export default function App() {
  const [loadingComplete, setLoadingComplete] =
    useState(false);

  return (
    <>
      {!loadingComplete ? (
        <Opening
          onFinish={() =>
            setLoadingComplete(true)
          }
        />
      ) : (
        <Home />
      )}
    </>
  );
}