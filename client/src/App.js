import "./App.css";
import GaborMainComponent from "./gabor/_mainComponent/gabor.component";
import Navbar from "./Dorina/navbar";

import GergoMainComponent from "./gergo/GergoMain.component";
import ZsofiComponent from "./Zsofia/Zsofikomponens";

function App() {
  return (
    <>
      <Navbar />
      <GaborMainComponent />
      <ZsofiComponent />
      <div className="App">
        <div>test</div>
        <h1>💘Zsófia🐶🤓💐💍💅🏼💕</h1>
        <img alt="random-dog"></img>
      </div>
      <GergoMainComponent />
      {/* ### !!! EZT NE TÖRÖLD LÉGYSZÍVES !!! ### */}

      {/* ### !!! EZT NE TÖRÖLD MERT GERGŐÉ !!! ### */}
    </>
  );
}

export default App;
