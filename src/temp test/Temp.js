import React, { useState } from 'react'
import TempChild from './TempChild'

const Temp = () => {
    const [num, setNum] = useState(5)
   
    return (
        <div>
            <TempChild onpress={(anyNum)=>{var magic=0;
        magic=anyNum+1
        console.log(magic)}} />
        </div>
    )
}

export default Temp
