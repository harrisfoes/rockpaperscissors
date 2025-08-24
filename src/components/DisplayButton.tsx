import iconRock from "/src/assets/icon-rock.svg";
import iconPaper from "/src/assets/icon-paper.svg";
import iconScissors from "/src/assets/icon-scissors.svg";

type Choice = "rock" | "paper" | "scissors";

type DisplayButtonProps = {
  choice: Choice;
};

const choiceStyles: Record<Choice, { color: string; icon: string }> = {
  rock: { color: "bg-red-500", icon: iconRock },
  paper: { color: "bg-blue-500", icon: iconPaper },
  scissors: { color: "bg-yellow-500", icon: iconScissors },
};

const DisplayButton = ({ choice }: DisplayButtonProps) => {
  const { color, icon } = choiceStyles[choice];

  return (
    <>
      <div
        className={`${color} rounded-full w-32 h-32 p-4 mb-4 shadow-[inset_0_-6px_rgba(0,0,0,0.1),0_0_rgba(0,0,0,0.7)]`}
      >
        <div className="bg-white rounded-full w-24 h-24 p-6 shadow-[inset_0_6px_rgba(0,0,0,0.2),0_0_rgba(0,0,0,0.7)]">
          <img src={icon} alt={choice} />
        </div>
      </div>
    </>
  );
};

export default DisplayButton;
