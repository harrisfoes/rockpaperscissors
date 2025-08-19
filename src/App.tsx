import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Gamebody from "./components/Gamebody";
import rules from "./assets/image-rules.svg";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex-col justify-center justify-items-center text-gray-200 font-bold min-h-screen overflow-auto bg-[radial-gradient(circle_at_center,_hsl(214,47%,23%),_hsl(237,49%,15%))]">
        <Header score={0} />
        <Gamebody />
        <div className="rules-container mt-16 w-full flex justify-center ">
          <button
            onClick={() => setOpen(true)}
            className="uppercase border-2 border-gray-500 text-gray-200 rounded-lg py-2 px-10 active:scale-95"
          >
            Rules{" "}
          </button>
          {/*Parent visibler*/}
          <div
            onClick={() => setOpen(false)}
            className={`fixed inset-0 flex justify-center items-center bg-black/20 transition-colors ${open ? "visible" : "invisible"}`}
          >
            <div onClick={(e) => e.stopPropagation()}
              className={`flex-col justify-evenly h-3/4 bg-white text-slate-800 shadow p-6 transition-all rounded-xl ${open ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}>
             <div className="text-center uppercase">Rules</div> 
              <img src={rules} />
              <button className="absolute top-2 right-2" onClick={()=>setOpen(false)}>
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
