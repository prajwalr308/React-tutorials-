import React from 'react'

//jsx and create element in react

const Lesson1 = () => {
    const h1=React.createElement("h1",{id:"magic"},"baked salmon");
    const Jsx=()=>{
     return <h2>JSX method</h2>
    }
  console.log("jsx in react ",<Jsx />)
    console.log(h1)
    return(
      <div>
          <p>react create element: {h1}</p>
        {
         <Jsx />
        }
      </div>
     
    )
}

export default Lesson1
