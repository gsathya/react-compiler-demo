import "./App.css";
import "./style.css";

import { Header } from "./Header";
import { Player } from "./Player";
import Clock from "./Clock";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <Player />
      </div>
      <Clock />
    </>
  );
}

export default App;
