const Header = ({ score }: { score: number }) => {
  return (
    <div className="head flex justify-center">
      <div className="flex justify-between w-[375px] border-2 gorder-gray-300 rounded-lg mx-8 mt-10 uppercase">
        <div className="leading-none py-4 pl-4">
          Rock <br />
          Paper <br />
          Scissors
        </div>
        <div className="rounded-md bg-white py-2 px-2 my-2 mx-2">
          <div className="text-blue-900 text-[8px] text-center">SCORE </div>
          <div className="text-gray-600 text-4xl w-[50px] text-center leading-none">{score}</div>
        </div>
      </div>
      </div>
  );
};

export default Header;
