import React, { useState } from 'react'

const TempChild = ({onPress=f=>f}) => {
 
    return (
        <div>
            <button onClick={()=>onPress(5)
            }>click</button>
        </div>
    )
}

export default TempChild
