import "./App.css";

function App() {
  return (
    <>
      <h1>MetroGenesis</h1>
      <div>
        <svg width="200" height="200">
          <circle cx="100" cy="100" r="10" fill="red" />
          <circle cx="400" cy="380" r="10" fill="red" />
          <line
            x1="100"
            y1="100"
            x2="400"
            y2="380"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </div>
    </>
  );
}

export default App;
