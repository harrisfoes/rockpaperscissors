import React from "react";
type ButtonColors = "bg-blue-500" | "bg-red-500" | "bg-yellow-500"

type Action = 
| { type: "PLAY"; choice: "rock" | "paper" | "scissors" }
| { type: "RESOLVE"; result: "win" | "lose" | "draw" }
| { type: "RESET" };

type ButtonProps = {
  icon : string,
  color : ButtonColors,
  choice: "rock" | "paper" | "scissors",
  dispatch : React.ActionDispatch<[action: Action]>
}

const clickableButton = ({ icon, color, choice, dispatch }: ButtonProps ) => {
  return (
    <button className={`${color} rounded-full p-4 shadow-[inset_0_-6px_rgba(0,0,0,0.1),0_0_rgba(0,0,0,0.7)] transition-transform active:shadow-none active:scale-80`}
    onClick={() => dispatch({type: "PLAY", choice})}>
      <div className="bg-white rounded-full w-24 h-24 p-6 shadow-[inset_0_6px_rgba(0,0,0,0.2),0_0_rgba(0,0,0,0.7)]">
        <img src={icon} />
      </div>
    </button>
  );
};

export default clickableButton;
