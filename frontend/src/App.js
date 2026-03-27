import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, done: false }]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleDone = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const login = () => {
    if (user.trim() !== "") setIsLoggedIn(true);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>

      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "15px",
        width: "300px",
        textAlign: "center",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
      }}>

        <h1>Task Manager 🚀</h1>

        {!isLoggedIn ? (
          <>
            <input
              type="text"
              placeholder="Enter your name"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              style={{ padding: "10px", width: "90%" }}
            />
            <br /><br />
            <button onClick={login} style={{
              padding: "10px 20px",
              background: "#667eea",
              color: "white",
              border: "none",
              borderRadius: "8px"
            }}>
              Login
            </button>
          </>
        ) : (
          <>
            <h3>Welcome {user} 👋</h3>

            <input
              type="text"
              placeholder="Enter task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
              style={{ padding: "10px", width: "70%" }}
            />

            <button onClick={addTask} style={{
              padding: "10px",
              marginLeft: "5px",
              background: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "8px"
            }}>
              Add
            </button>

            <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
              {tasks.map((t, index) => (
                <li key={index} style={{
                  background: "#f1f1f1",
                  margin: "10px 0",
                  padding: "10px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}>
                  <span
                    onClick={() => toggleDone(index)}
                    style={{
                      textDecoration: t.done ? "line-through" : "none",
                      cursor: "pointer"
                    }}
                  >
                    {t.text}
                  </span>

                  <button onClick={() => deleteTask(index)} style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "5px"
                  }}>
                    ❌
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}

      </div>
    </div>
  );
}

export default App;