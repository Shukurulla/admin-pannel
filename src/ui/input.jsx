const Input = ({ type = "text", label, state, setState, name }) => {
  return (
    <div className="input-group w-100">
      <span className="input-group-text" id="addon-wrapping">
        @
      </span>
      <input
        type={type}
        className="form-control"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder={label}
        name={name}
      />
    </div>
  );
};

export default Input;
