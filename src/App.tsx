import { useState } from 'react';
import './App.css';

function App() {
  const [temperature, setTemperature] = useState(20); // Initial temperature

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center transition-all 
      ${temperature < 15 ? 'bg-blue-500' : temperature > 30 ? 'bg-red-500' : 'bg-green-500'}`}>

      <h1 className="text-4xl font-bold mb-4 text-white">Temperature Control</h1>
      <p className="text-2xl text-white mb-4">{temperature}°C</p>

      <div className="space-x-4">
        <button 
          className="px-4 py-2 bg-white text-black rounded-lg shadow-md hover:bg-gray-200" 
          onClick={() => setTemperature(temperature + 1)}>
          Increase
        </button>

        <button 
          className="px-4 py-2 bg-white text-black rounded-lg shadow-md hover:bg-gray-200" 
          onClick={() => setTemperature(temperature - 1)}>
          Decrease
        </button>
      </div>
    </div>
  );
}

export default App;
