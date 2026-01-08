function Button({ text, onClick, type = "submit" }) {
  return (
    <div className="mb-5 max-w-md">
      <button
        type={type}
        onClick={onClick}
        className="w-full bg-yellow-400 text-white font-bold py-2 px-2 rounded hover:bg-yellow-500 transition cursor-pointer"
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
