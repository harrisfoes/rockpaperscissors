import { useReducer } from "react";
import bgTriangle from "/src/assets/bg-triangle.svg";
import iconRock from "/src/assets/icon-rock.svg";
import iconPaper from "/src/assets/icon-paper.svg";
import iconScissors from "/src/assets/icon-scissors.svg";
import ClickableButton from "./ClickableButton";
import DisplayButton from "./DisplayButton";

type State =
  | { status: "idle" }
  | { status: "playerChoice"; choice: "rock" | "paper" | "scissors" }
  | { status: "result"; result: "win" | "lose" | "draw" };

type Action =
  | { type: "PLAY"; choice: "rock" | "paper" | "scissors" }
  | { type: "RESOLVE"; result: "win" | "lose" | "draw" }
  | { type: "RESET" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "PLAY":
      return { status: "playerChoice", choice: action.choice };
    case "RESOLVE":
      return { status: "result", result: action.result };
    case "RESET":
      return { status: "idle" };
    default:
      return state;
  }
}

const Gamebody = () => {
  const [state, dispatch] = useReducer(reducer, { status: "idle" });
  return (
    <>
      {state.status == "idle" && (
        <>
          <div className="gameBody mt-24 relative flex justify-center my-10">
            <div className="triangle flex justify-center my-20">
              <img src={bgTriangle} className="w-3/4" />
            </div>
            <div className="rpc-buttons absolute pt-4 px-8 w-[375px]">
              <div className="flex justify-between">
                <ClickableButton
                  icon={iconPaper}
                  choice="paper"
                  dispatch={dispatch}
                  color="bg-blue-500"
                />
                <ClickableButton
                  icon={iconScissors}
                  choice="scissors"
                  dispatch={dispatch}
                  color="bg-yellow-500"
                />
              </div>
              <div className="flex justify-center pt-6">
                <ClickableButton
                  icon={iconRock}
                  choice="rock"
                  dispatch={dispatch}
                  color="bg-red-500"
                />
              </div>
            </div>
          </div>
        </>
      )}

      {state.status == "playerChoice" && (
        <>
          <div className="pt-4 gap-16 px-8 mt-16">
            <div className="flex justify-between text-center text-xs">
              <div>
                <DisplayButton choice={state.choice} />
                <p>YOU PICKED</p>
              </div>

              <div>
                <div className="bg-black/10 m-4 w-28 h-28 rounded-full">
                </div>
                <p>THE HOUSE PICKED</p>
              </div>
            </div>
          </div>
          <div className="my-8 text-center">
            <button
              className="p-2 border-2 rounded-xl"
              onClick={() => dispatch({ type: "RESOLVE", result: "win" })}
            >
             Debug only:next 
            </button>
          </div>
        </>
      )}

      {state.status == "result" && (
        <>
          <button onClick={() => dispatch({ type: "RESET" })}>
            Here we display result
          </button>
        </>
      )}
    </>
  );
};

export default Gamebody;
