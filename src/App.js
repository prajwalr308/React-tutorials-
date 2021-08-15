import logo from './logo.svg';
import React from "react"
import './App.css';

import Lesson5 from './lessons/Lesson5/Lesson5';
import Lesson1 from './lessons/lesson1/Lesson1';
import Lesson2 from './lessons/Lesson2/Lesson2';
import Lesson3 from './lessons/Lesson3/Lesson3';
import StarRating from './lessons/Lesson5/StarRating';


function App() {

  return(
    <div>
     <Lesson1 />
     <Lesson2 />
     <Lesson3 />
<StarRating />
    </div>
   
  )

}

export default App;
