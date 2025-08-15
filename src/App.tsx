import "./App.css";
import bgTriangle from "/src/assets/bg-triangle.svg";
import iconRock from "/src/assets/icon-rock.svg";
import iconPaper from "/src/assets/icon-paper.svg";
import iconScissors from "/src/assets/icon-scissors.svg";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="flex-col justify-center justify-items-center text-gray-200 font-bold min-h-screen overflow-auto bg-[radial-gradient(circle_at_center,_hsl(214,47%,23%),_hsl(237,49%,15%))]">
        <Header score={0} /> 
        <div className="gameBody mt-24 relative flex justify-center my-10">
          <div className="triangle flex justify-center my-20">
            <img src={bgTriangle} className="w-3/4" />
          </div>
          <div className="rpc-buttons absolute pt-4 px-8 w-[375px]">
            <div className="flex justify-between">
              <Button icon={iconPaper} color="bg-blue-500" />
              <Button icon={iconScissors} color="bg-yellow-500" />
            </div>
            <div className="flex justify-center pt-6">
              <Button icon={iconRock} color="bg-red-500" />
            </div>
          </div>
        </div>
        <div className="rules-container mt-16 w-full flex justify-center ">
        <button className="uppercase border-2 border-gray-500 text-gray-200 rounded-lg py-2 px-10 active:scale-90">Rules </button>
        </div>
      </div>
    </>
  );
}

export default App;
