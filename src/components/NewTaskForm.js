import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [newItemFields, setNewItemFields] = useState({
    text: "",
    category: "Code",
  });

  function handleFields(e) {
    const { name, value } = e.target;
    setNewItemFields({ ...newItemFields, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit(newItemFields);
    setNewItemFields({ text: "", category: "Code" });
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input
          type="text"
          name="text"
          value={newItemFields.text}
          onChange={handleFields}
        />
      </label>

      <label>
        Category
        <select name="category" value={newItemFields.category} onChange={handleFields}>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>

      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
