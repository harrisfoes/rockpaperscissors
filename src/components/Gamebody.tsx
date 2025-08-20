import bgTriangle from "/src/assets/bg-triangle.svg";

import iconRock from "/src/assets/icon-rock.svg";
import iconPaper from "/src/assets/icon-paper.svg";
import iconScissors from "/src/assets/icon-scissors.svg";
import Button from "./Button";

const Gamebody = () => {
  return (
    <>
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
    </>
  );
};

export default Gamebody;
