import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

import Lesson5 from "./lessons/Lesson5/Lesson5";
import Lesson1 from "./lessons/lesson1/Lesson1";
import Lesson2 from "./lessons/Lesson2/Lesson2";
import Lesson3 from "./lessons/Lesson3/Lesson3";
import StarRating from "./lessons/Lesson5/StarRating";
import ColorList from "./lessons/Lesson6/ColorList";
import colorData from "./lessons/Lesson6/color-data";

function App() {
  const [colors, setColors] = useState(colorData)
  return (
    <div>
      <Lesson1 />
      <Lesson2 />
      <Lesson3 />
  

      <ColorList colors={colors}
     onRateColor={(id, rating) => {
      const newColors = colors.map(color =>
      color.id === id ? { ...color, rating } : color
      );
      setColors(newColors);
      }}
      

      onRemoveColor={id => {
        const newColors = colors.filter(color => color.id !== id);
        setColors(newColors);
        }}
      />
    </div>
  );
}

export default App;
