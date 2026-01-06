function Input({ type, text, name, placeholder, handleOnChange, value, multiple }) {
  return (
    <div className="flex flex-col mb-5 max-w-md">
      <label htmlFor={name} className="font-medium">
        {text}:
      </label>

      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        multiple={multiple}
        className="w-full border border-gray-300 px-5 py-2 text-base rounded-md mt-1"
      />
    </div>
  );
}


export default Input;