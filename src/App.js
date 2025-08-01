import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Tailwind + React</h1>
        <p className="text-gray-600 mb-6">This is a live demo of Tailwind CSS with a React project. ✨</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold">
          Try Me
        </button>
      </div>
    </div>
  );
}

export default App;
