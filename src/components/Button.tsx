type ButtonColors = "bg-blue-500" | "bg-red-500" | "bg-yellow-500"

type ButtonProps = {
  icon : string,
  color : ButtonColors
}

const Button = ({ icon, color }: ButtonProps ) => {
  console.log(icon);
  return (
    <button className={`${color} rounded-full p-4 shadow-[inset_0_-6px_rgba(0,0,0,0.1),0_0_rgba(0,0,0,0.7)] transition-transform active:shadow-none active:scale-80`}>
      <div className="bg-white rounded-full w-25 h-25 p-6 shadow-[inset_0_6px_rgba(0,0,0,0.2),0_0_rgba(0,0,0,0.7)]">
        <img src={icon} />
      </div>
    </button>
  );
};

export default Button;
