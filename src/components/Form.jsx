import { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    props.addTask("Say hello!");
  }
  return (
    <form>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs too be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoCapitalize="off"
        value={name}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
