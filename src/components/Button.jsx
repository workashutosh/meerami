
const Button = ({ name }) => {
  return (
    <button className="relative border-none cursor-pointer rounded-[0.75em] bg-black">
      <span className="block font-semibold border-2 border-black rounded-[0.75em] py-3 px-6 bg-gray-200 text-black transform transition-transform duration-100 ease-in-out hover:translate-y-[-0.33em] active:translate-y-0">
        {name}
      </span>
    </button>
  );
};

export default Button;
