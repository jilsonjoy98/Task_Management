
// export default Reminder
import React, { useState } from "react";
import "./Reminder.css";
import axios from "axios";

function Reminder() {
  const [reminder, setReminder] = useState([]);
  const [newReminder, setNewReminder] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editedReminder, setEditedReminder] = useState("");

  
  const handleInputChange = (event) => {
    setNewReminder(event.target.value);
  };

  const handleAddReminder = () => {
    if (newReminder.trim()) {
      setReminder([...reminder, { text: newReminder, completed: false }]);
      setNewReminder("");
    }
  };

  const handleDeleteReminder = (index) => {
    setReminder(reminder.filter((item, itemIndex) => itemIndex !== index));
    if (editIndex === index) {
      setEditIndex(null);
    }
  };

  const handleEditReminder = (index) => {
    setEditIndex(index);
    setEditedReminder(reminder[index].text);
  };

  const handleSaveEdit = (index) => {
    const updatedReminder = [...reminder];
    updatedReminder[index].text = editedReminder;
    setReminder(updatedReminder);
    setEditIndex(null);
  };

  const handleCompleteTask = (index) => {
    const updatedReminder = [...reminder];
    updatedReminder[index].completed = true;
    setReminder(updatedReminder);
  };


  
  return (
    <div className="container">
      <h1>Task Management App</h1>
      <div className="input_container">
        <input
          type="text"
          value={newReminder}
          placeholder="Enter a Task"
          onChange={handleInputChange}
        />
        <button className="add_btn" onClick={handleAddReminder}>
          Add Task
        </button>
      </div>
      {reminder.length > 0 ? (
        <ul className="reminder_list">
          {reminder.map((task, index) => (
            <li key={index} className={task.completed ? "completed" : ""}>
              {editIndex === index ? (
                <div className="savebutton">
                  <input
                    type="text"
                    value={editedReminder}
                    onChange={(e) => setEditedReminder(e.target.value)}
                  />
                  <button onClick={() => handleSaveEdit(index)}>Save</button>
                </div>
              ) : (
                <div>
                  {task.text}
                  {!task.completed && (
                    <div className="buttonsection">
                      <button className="editbuttons" onClick={() => handleEditReminder(index)}>
                        Edit
                      </button>
                      <button onClick={() => handleDeleteReminder(index)}>
                        Delete
                      </button>
                      <button onClick={() => handleCompleteTask(index)}>
                        Complete Task
                      </button>
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No Task found</p>
      )}
    </div>
  );
}

export default Reminder;
