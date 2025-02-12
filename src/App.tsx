import { useState } from "react";
import "./App.css";

function App() {
  const [temperature, setTemperature] = useState(20); // Initial temperature

  // Function to change background color based on temperature
  const getBgColor = () => {
    if (temperature < 15) return "bg-blue-500";
    if (temperature > 30) return "bg-red-500";
    return "bg-green-500";
  };

  return (
    <div className={`h-screen w-full flex flex-col items-center justify-center transition-all ${getBgColor()}`}>
      <h1 className="text-white text-4xl font-bold mb-4">Temperature App</h1>
      <p className="text-white text-2xl">Temperature: {temperature}°C</p>

      <div className="mt-4 flex gap-4">
        <button
          className="px-6 py-3 text-lg font-semibold text-white bg-black rounded-lg hover:bg-gray-700 transition-all"
          onClick={() => setTemperature(temperature + 1)}
        >
          Increase
        </button>
        <button
          className="px-6 py-3 text-lg font-semibold text-white bg-black rounded-lg hover:bg-gray-700 transition-all"
          onClick={() => setTemperature(temperature - 1)}
        >
          Decrease
        </button>
      </div>
    </div>
  );
}

export default App;
