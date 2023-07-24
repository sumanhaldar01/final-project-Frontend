import React, { useState } from 'react';

const Compiler = () => {
  const [sourceCode, setSourceCode] = useState('');
  const [compilerOutput, setCompilerOutput] = useState('');

  const compileCode = () => {
    
    setCompilerOutput(sourceCode);
  };

  return (
    <div className="container mx-auto py-8 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">Compiler</h1>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Source Code</h2>
          <textarea
            className="w-full h-64 p-4 bg-gray-100 rounded-lg shadow"
            value={sourceCode}
            onChange={(e) => setSourceCode(e.target.value)}
          ></textarea>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={compileCode}
          >
            Compile
          </button>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">Compiler Output</h2>
          <div className="w-full h-64 p-4 bg-gray-100 rounded-lg shadow overflow-auto">
            <pre>{compilerOutput}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compiler;
