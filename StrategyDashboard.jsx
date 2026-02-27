// StrategyDashboard.jsx
import React, { useState } from 'react';

const StrategyDashboard = () => {
  const [rainfall, setRainfall] = useState(200);
  
  const strategies = [
    { name: "Negarim Microcatchments", use: "Trees & Bushes", slope: "1-5%" },
    { name: "Contour Stone Bunds", use: "Crops", slope: "0.5-2%" },
    { name: "Semicircular Bunds", use: "Rangeland/Fodder", slope: "up to 2%" }
  ];

  return (
    <div className="p-8 bg-amber-50 min-h-screen">
      <h1 className="text-3xl font-bold text-amber-900 mb-6">Arid Land Strategy Portal</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Input Card */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-amber-500">
          <label className="block text-sm font-medium text-gray-700">Annual Rainfall (mm)</label>
          <input 
            type="range" min="50" max="600" value={rainfall}
            onChange={(e) => setRainfall(e.target.value)}
            className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer mt-2"
          />
          <p className="mt-2 text-xl font-mono text-amber-700">{rainfall} mm/year</p>
        </div>

        {/* Strategies List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Recommended Catchment Structures</h2>
          {strategies.map(s => (
            <div key={s.name} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-amber-800">{s.name}</h3>
              <p className="text-sm text-gray-600">Best for: {s.use} | Slopes: {s.slope}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};