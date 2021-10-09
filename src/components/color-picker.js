import React, {useState} from 'react';
import {colors} from '../colors-list';

const shades = [
    'red',
    'pink',
    'purple',
    'deep-purple',
    'indigo',
    'blue',
    'light-blue',
    'cyan',
    'teal',
    'green',
    'light-green',
    'lime',
    'yellow',
    'amber',
    'orange',
    'deep-orange',
    'brown',
    'grey',
]

const ColorPicker = ({setColor}) => {
    const [pos, setPos] = useState(shades[0])
    return <div className="w-2/4">
        <div className="flex gap-2 flex-wrap">
            {shades.map(el => <h1 onClick={() => {
                setPos(el);
            }} className={`px-4 py-2 border cursor-pointer text-center hover:bg-yellow-200 font-medium ${(pos === el)? 'bg-yellow-200': ''}`}
            >{el}</h1>)}
        </div> 
        <div className="py-2" />
        <div className="flex flex-wrap">
        {Object.keys(colors).map(cl => {
            if(cl.startsWith(pos)) {
                return <div 
                className="h-10 w-10 cursor-pointer" 
                style={{backgroundColor: `${colors[cl]}`}} 
                onClick={() => {setColor(colors[cl])}}
                />
            }
            return null;
        })}
        </div>
    </div>
}

export default ColorPicker;