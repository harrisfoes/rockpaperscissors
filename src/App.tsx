import "./App.css";
import bgTriangle from "/src/assets/bg-triangle.svg";
import iconRock from "/src/assets/icon-rock.svg";
import iconPaper from "/src/assets/icon-paper.svg";
import iconScissors from "/src/assets/icon-scissors.svg";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="text-gray-200 font-bold min-h-screen overflow-auto bg-[radial-gradient(circle_at_center,_hsl(214,47%,23%),_hsl(237,49%,15%))]">
        <div className="head flex justify-between justify-items-center border-2 border-gray-300 rounded-lg mx-8 mt-10 uppercase">
          <div className="leading-none py-4 pl-4">
            Rock <br />
            Paper <br />
            Scissors
          </div>
          <div className="rounded-lg bg-white py-4 px-4 my-2 mx-2">
            <div className="text-blue-900 text-[8px] text-center">SCORE </div>
            <div className="text-gray-600 text-3xl leading-none">12</div>
          </div>
        </div>
        <Button icon={iconRock} color="bg-blue-500" />
        <div className="gameBody relative flex justify-center my-10">
          <div className="triangle flex justify-center my-20">
            <img src={bgTriangle} className="w-3/4" />
          </div>
          <div className="rpc-buttons absolute border-1">
            <Button icon={iconPaper} color="bg-blue-500" />
            <Button icon={iconScissors} color="bg-yellow-500" />
            <div>
              <Button icon={iconRock} color="bg-red-500" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
