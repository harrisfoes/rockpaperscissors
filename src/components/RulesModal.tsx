import rules from "../assets/image-rules.svg";

type RulesModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const RulesModal = ({ open, setOpen }: RulesModalProps) => {
  return (
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
        {/* rules div */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`flex-col justify-items-center items-center justify-center bg-white text-slate-800 shadow p-6 transition-all rounded-xl ${open ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
        >
          <div className="text-center uppercase text-2xl my-16">Rules</div>
          <img className="mb-32" src={rules} />
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-300">
            <button
              className="text-2xl text-center"
              onClick={() => setOpen(false)}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default RulesModal;
