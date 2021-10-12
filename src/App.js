import React, { useState } from 'react';
import Navbar from './components/navbar';
import Spacer from './components/spacer';
import ColorPicker from './components/color-picker';

function App() {
  const [savedLabelList, setSavedLabelList] = useState([]);
  const [labelColor, setLabelColor] = useState('');
  const [labelText, setLabelText] = useState('');
  return (
    <div>
      <Navbar />
      <Spacer>
        <div className="h-12" />

        <div className="flex">
        <div className="py-5 w-2/4">
          <div className="flex flex-wrap w-full gap-2">
            {savedLabelList.map(el => <span className="px-3 py-1/2 rounded-full" style={{backgroundColor: el.color}}>{el.name}</span>)}
          </div>
        </div>

          <div className="w-2/4">
            <h1>
              <code>{savedLabelList.map(el => JSON.stringify(el))}</code>
            </h1>
          </div>
        </div>

        

        <span className="px-3 py-1/2 rounded-full" style={{ backgroundColor: labelColor }}>
          {labelText}
        </span>

        <div className="h-5" />

        <div className="flex gap-4">

          <div class=" relative w-2/4">
            <div className="flex-col w-full">

              <div className="mb-4 w-full">

                <input
                  type="text"
                  value={labelText}
                  onChange={(e) => { setLabelText(e.target.value) }}
                  class=" flex-1 w-full appearance-none border border-gray-300 w-auto py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Label Text" />
              </div>

              <div className="mb-4 w-full">

                <input
                  type="text"
                  class=" flex-1 w-full appearance-none border border-gray-300 w-auto py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Description" />
              </div>

              <div className="mb-4 w-full">

                <input
                  type="text"
                  class=" flex-1 w-full appearance-none border border-gray-300 w-auto py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="comma seperated aliases" />
              </div>

              <div className="mb-4 ">
                <button 
                className="border px-4 py-2 rounded-sm border-gray-300 font-semibold border-green-400 text-green-500"
                onClick={() => {
                  setSavedLabelList([...savedLabelList, {
                    name: labelText,
                    color: labelColor
                  }])
                }}
                >Add</button>
              </div>
            </div>


          </div>

          <div className="flex-1" />

          <ColorPicker setColor={setLabelColor} />

        </div>




      </Spacer>
    </div>
  );
}

export default App;
