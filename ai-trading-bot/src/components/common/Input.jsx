function Input({
  type = "text",
  placeholder,
  value,
  onChange
}) {

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
        border
        rounded-xl
        p-4
        w-full
        outline-none
      "
    />
  );
}

export default Input;