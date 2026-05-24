function Button({ text, onClick }) {

  return (
    <button
      onClick={onClick}
      className="
        bg-blue-600
        hover:bg-blue-700
        text-white
        px-6
        py-3
        rounded-xl
        transition-all
      "
    >
      {text}
    </button>
  );
}

export default Button;