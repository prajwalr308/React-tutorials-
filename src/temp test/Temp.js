import React, { useState } from 'react'
import TempChild from './TempChild'
import TempMid from './TempMid'

const Temp = ({onpress}) => {
    const [num, setNum] = useState(5)
   
    return (
        <div>
            <TempChild onpress={()=>onpress(2)} />
        </div>
    )
}

export default Temp
