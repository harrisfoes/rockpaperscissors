import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Gamebody from "./components/Gamebody";
import RulesModal from "./components/RulesModal";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex-col justify-center justify-items-center text-gray-200 font-bold min-h-screen overflow-auto bg-[radial-gradient(circle_at_center,_hsl(214,47%,23%),_hsl(237,49%,15%))]">
        <Header score={0} />
        <Gamebody />
        <RulesModal open={open} setOpen={setOpen} />
      </div>
    </>
  );
}

export default App;
