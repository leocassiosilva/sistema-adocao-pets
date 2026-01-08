function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className="flex flex-col mb-5 max-w-md">
      <label
        htmlFor={name}
        className="font-medium"
      >
        {text}:
      </label>

      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ""}
        className="
          w-full
          px-2 py-2
          border border-gray-300
          rounded-md
          bg-white
          text-gray-700
          focus:outline-none
          focus:ring-2
          transition
        "
      >
        <option value="">Selecione uma opção</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select;
