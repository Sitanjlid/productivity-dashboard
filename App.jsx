import { useState, useEffect } from "react";

function App() {
  // =========================
  // TASKS
  // =========================

  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem(
      "tasks"
    );

    return savedTasks
      ? JSON.parse(savedTasks)
      : [];
  });

  // =========================
  // TRACKER
  // =========================

  const [selectedTrack, setSelectedTrack] =
    useState("DSA");

  const [selectedSubject, setSelectedSubject] =
    useState("Arrays");

  // =========================
  // TRACKER DATA
  // =========================

  const trackerData = {
    DSA: {
      Arrays: [
        "Array Traversal",
        "Prefix Sum",
        "Sliding Window",
        "Two Pointer",
        "Kadane Algorithm",
        "Binary Search on Arrays",
        "Merge Intervals",
        "Sorting Basics",
        "Dutch National Flag Algorithm",
        "Majority Element",
        "Find Duplicates",
        "Rotate Array",
        "Maximum Subarray Sum",
        "Stock Buy and Sell",
        "Trapping Rain Water",
      ],

      Strings: [
        "Palindrome",
        "Anagram",
        "Substrings",
        "Frequency Counting",
        "String Hashing Basics",
      ],

      "Binary Search": [
        "Basic Binary Search",
        "Lower Bound / Upper Bound",
        "Search in Rotated Array",
        "Binary Search on Answer",
      ],

      "Linked List": [
        "Reverse Linked List",
        "Detect Cycle",
        "Middle Node",
        "Merge Lists",
      ],

      "Stack & Queue": [
        "Balanced Parentheses",
        "Next Greater Element",
        "Monotonic Stack Basics",
        "Queue Implementation",
      ],

      Trees: [
        "Traversals",
        "Height of Tree",
        "Diameter",
        "BFS / DFS",
        "BST Basics",
        "Lowest Common Ancestor",
      ],

      Graphs: [
        "BFS",
        "DFS",
        "Connected Components",
        "Topological Sort Basics",
      ],

      "Dynamic Programming": [
        "Fibonacci",
        "Climbing Stairs",
        "Knapsack Basic",
        "LIS Basic",
      ],
    },

    "CS Fundamentals": {
      DBMS: [
        "Keys",
        "Normalization",
        "Joins",
        "ACID Properties",
        "Transactions",
        "Indexing",
        "SQL Queries",
        "ER Diagram Basics",
      ],

      OS: [
        "Process vs Thread",
        "CPU Scheduling",
        "Deadlock",
        "Paging",
        "Virtual Memory",
        "Synchronization Basics",
      ],

      CN: [
        "OSI Model",
        "TCP/IP",
        "HTTP/HTTPS",
        "DNS",
        "IP Address",
        "Routing Basics",
      ],

      OOPS: [
        "Class & Object",
        "Encapsulation",
        "Abstraction",
        "Inheritance",
        "Polymorphism",
        "Constructor",
        "Access Modifiers",
      ],
    },

    Analytics: {
      SQL: [
        "SELECT",
        "WHERE",
        "GROUP BY",
        "HAVING",
        "ORDER BY",
        "JOINS",
        "Subqueries",
        "Window Functions",
      ],

      Excel: [
        "Pivot Tables",
        "VLOOKUP",
        "Conditional Formatting",
        "Charts",
        "Data Cleaning",
      ],

      "Power BI": [
        "Dashboard Creation",
        "DAX Basics",
        "Data Visualization",
        "Filters & Slicers",
        "KPI Cards",
      ],

      Python: [
        "Pandas",
        "NumPy",
        "CSV Handling",
        "Data Cleaning",
        "Matplotlib Basics",
      ],
    },
  };

  // =========================
  // COMPLETED TOPICS
  // =========================

  const [completedTopics, setCompletedTopics] =
    useState({});

  // =========================
  // TASK FUNCTIONS
  // =========================

  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    setTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter(
      (_, i) => i !== index
    );

    setTasks(updatedTasks);
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];

    updatedTasks[index].completed =
      !updatedTasks[index].completed;

    setTasks(updatedTasks);
  };

  // =========================
  // TOPIC TOGGLE
  // =========================

  const toggleTopic = (topic) => {
    setCompletedTopics((prev) => ({
      ...prev,

      [topic]: !prev[topic],
    }));
  };

  // =========================
  // PRODUCTIVITY SCORE
  // =========================

  const completedTasks = tasks.filter(
    (t) => t.completed
  ).length;

  const productivityScore =
    tasks.length === 0
      ? 0
      : (completedTasks / tasks.length) *
      100;

  // =========================
  // CURRENT TOPICS
  // =========================

  const currentTopics =
    trackerData[selectedTrack]?.[
    selectedSubject
    ] || [];

  // =========================
  // SUBJECT PROGRESS
  // =========================

  const completedCount =
    currentTopics.filter(
      (topic) => completedTopics[topic]
    ).length;

  const subjectPercentage =
    currentTopics.length === 0
      ? 0
      : (completedCount /
        currentTopics.length) *
      100;

  // =========================
  // SAVE TASKS
  // =========================

  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  // =========================
  // RESET SUBJECT
  // =========================

  useEffect(() => {
    const firstSubject = Object.keys(
      trackerData[selectedTrack]
    )[0];

    setSelectedSubject(firstSubject);
  }, [selectedTrack]);

  return (
    <div
      style={{
        minHeight: "100vh",

        background: `
linear-gradient(
135deg,
#0f172a 0%,
#132238 30%,
#1e3a8a 70%,
#2563eb 100%
)
`,

        color: "white",

        padding: "30px",

        fontFamily:
          "'Inter', sans-serif",

        position: "relative",

        overflow: "hidden",
      }}
    >
      {/* BLUE GLOW */}

      <div
        style={{
          position: "absolute",

          width: "500px",

          height: "500px",

          background:
            "rgba(59,130,246,0.25)",

          borderRadius: "50%",

          filter: "blur(120px)",

          top: "-150px",

          left: "-120px",

          zIndex: 0,
        }}
      ></div>


      {/* MAIN CONTENT */}

      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* HEADER */}

        <h1
          style={{
            fontSize: "42px",
            fontWeight: "700",
            letterSpacing: "-1px",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Productivity Dashboard
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            fontSize: "16px",
            marginBottom: "40px",
          }}
        >
          Track your preparation and
          productivity
        </p>

        {/* MAIN LAYOUT */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            width: "100%",
            gap: "25px",
            alignItems: "start",
          }}
        >
          {/* LEFT */}

          <div
            style={{
              backgroundColor:
                "rgba(17,24,39,0.78)",

              border:
                "1px solid #1f2937",

              borderRadius: "14px",

              padding: "28px",

              position: "sticky",

              top: "20px",

              backdropFilter:
                "blur(10px)",
            }}
          >
            <h2
              style={{
                marginBottom: "24px",
                fontWeight: "600",
              }}
            >
              Productivity
            </h2>

            <p
              style={{
                fontSize: "72px",
                fontWeight: "700",
                marginBottom: "10px",
              }}
            >
              {productivityScore.toFixed(0)}%
            </p>

            <p
              style={{
                color: "#94a3b8",
                marginBottom: "24px",
              }}
            >
              Daily Completion Score
            </p>

            {/* BAR */}

            <div
              style={{
                width: "100%",
                height: "10px",
                backgroundColor: "#1f2937",
                borderRadius: "999px",
                overflow: "hidden",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  width: `${productivityScore}%`,
                  height: "100%",
                  backgroundColor: "#2563eb",
                }}
              ></div>
            </div>

            <div
              style={{
                marginBottom: "24px",
              }}
            >
              <h3
                style={{
                  color: "#cbd5e1",
                  marginBottom: "8px",
                }}
              >
                Total Tasks
              </h3>

              <p
                style={{
                  fontSize: "28px",
                  fontWeight: "600",
                }}
              >
                {tasks.length}
              </p>
            </div>

            <div>
              <h3
                style={{
                  color: "#cbd5e1",
                  marginBottom: "8px",
                }}
              >
                Completed
              </h3>

              <p
                style={{
                  fontSize: "28px",
                  fontWeight: "600",
                }}
              >
                {completedTasks}
              </p>
            </div>
          </div>

          {/* CENTER */}

          <div>
            <h2
              style={{
                textAlign: "center",
                marginBottom: "20px",
                fontWeight: "600",
              }}
            >
              Daily Tasks
            </h2>

            {/* INPUT */}

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginBottom: "24px",
              }}
            >
              <input
                type="text"
                placeholder="Enter your task..."
                value={task}
                onChange={(e) =>
                  setTask(e.target.value)
                }
                style={{
                  flex: 1,
                  padding: "15px",
                  borderRadius: "8px",
                  border:
                    "1px solid #374151",
                  outline: "none",
                  backgroundColor:
                    "rgba(17,24,39,0.78)",
                  color: "white",
                  fontSize: "15px",
                  backdropFilter:
                    "blur(10px)",
                }}
              />

              <button
                onClick={addTask}
                onMouseOver={(e) => {
                  e.target.style.transform =
                    "translateY(-2px)";

                  e.target.style.boxShadow =
                    "0 10px 22px rgba(37,99,235,0.35)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform =
                    "translateY(0px)";

                  e.target.style.boxShadow =
                    "0 4px 12px rgba(37,99,235,0.2)";
                }}
                style={{
                  padding: "15px 22px",
                  borderRadius: "8px",
                  border:
                    "1px left bottom solid #000000ff",
                  backgroundColor:
                    "#7a93cbff",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "14px",
                  transition:
                    "all 0.2s ease",
                  boxShadow:
                    "0 4px 12px rgba(37,99,235,0.2)",
                }}
              >
                Add Task
              </button>
            </div>

            {/* TASKS */}

            {tasks.map((t, index) => (
              <div
                key={index}
                style={{
                  backgroundColor:
                    "rgba(17,24,39,0.78)",

                  border:
                    "1px solid #1f2937",

                  padding: "18px",

                  borderRadius: "10px",

                  marginBottom: "14px",

                  display: "flex",

                  justifyContent:
                    "space-between",

                  alignItems: "center",

                  backdropFilter:
                    "blur(10px)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={t.completed}
                    onChange={() =>
                      toggleComplete(index)
                    }
                  />

                  <span
                    style={{
                      textDecoration:
                        t.completed
                          ? "line-through"
                          : "none",

                      color: t.completed
                        ? "#6b7280"
                        : "white",
                    }}
                  >
                    {t.text}
                  </span>
                </div>

                <button
                  onClick={() =>
                    deleteTask(index)
                  }
                  style={{
                    backgroundColor:
                      "#dc2626",

                    color: "white",

                    border: "none",

                    padding: "8px 12px",

                    borderRadius: "8px",

                    cursor: "pointer",

                    fontWeight: "500",
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT */}

          <div>
            <h2
              style={{
                textAlign: "center",
                marginBottom: "20px",
                fontWeight: "600",
              }}
            >
              Skill Tracker
            </h2>

            {/* DROPDOWNS */}

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              <select
                value={selectedTrack}
                onChange={(e) =>
                  setSelectedTrack(
                    e.target.value
                  )
                }
                style={{
                  flex: 1,
                  padding: "14px",
                  borderRadius: "8px",
                  border: "1px solid #374151",
                  backgroundColor:
                    "rgba(17,24,39,0.78)",
                  color: "white",
                  outline: "none",
                  fontSize: "14px",
                  cursor: "pointer",
                  backdropFilter: "blur(10px)",

                  colorScheme: "dark",
                }}
              >
                <option>DSA</option>

                <option>
                  CS Fundamentals
                </option>

                <option>Analytics</option>
              </select>

              <select
                value={selectedSubject}
                onChange={(e) =>
                  setSelectedSubject(
                    e.target.value
                  )
                }
                style={{
                  flex: 1,
                  padding: "14px",
                  borderRadius: "8px",
                  border:
                    "1px solid #374151",
                  backgroundColor:
                    "rgba(17,24,39,0.78)",
                  color: "white",
                  outline: "none",
                  fontSize: "14px",
                  cursor: "pointer",
                  backdropFilter:
                    "blur(10px)",
                  colorScheme: "dark",

                }}
              >
                {Object.keys(
                  trackerData[selectedTrack]
                ).map((subject) => (
                  <option key={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>

            {/* TRACKER CARD */}

            <div
              style={{
                backgroundColor:
                  "rgba(17,24,39,0.78)",

                border:
                  "1px solid #1f2937",

                padding: "24px",

                borderRadius: "14px",

                backdropFilter:
                  "blur(10px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  marginBottom: "16px",
                }}
              >
                <h3
                  style={{
                    fontWeight: "600",
                  }}
                >
                  {selectedSubject}
                </h3>

                <p
                  style={{
                    color: "#cbd5e1",
                  }}
                >
                  {subjectPercentage.toFixed(
                    0
                  )}
                  %
                </p>
              </div>

              {/* BAR */}

              <div
                style={{
                  width: "100%",
                  height: "10px",
                  backgroundColor:
                    "#1f2937",
                  borderRadius: "999px",
                  overflow: "hidden",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    width: `${subjectPercentage}%`,
                    height: "100%",
                    backgroundColor:
                      "#2563eb",
                  }}
                ></div>
              </div>

              {/* TOPICS */}

              {currentTopics.map((topic) => (
                <div
                  key={topic}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "14px",
                    paddingBottom: "10px",
                    borderBottom:
                      "1px solid #1f2937",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={
                      completedTopics[
                      topic
                      ] || false
                    }
                    onChange={() =>
                      toggleTopic(topic)
                    }
                  />

                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;