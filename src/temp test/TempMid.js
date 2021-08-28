import React from 'react'
import TempChild from './TempChild'

const TempMid = ({onpress=f=>f}) => {
    return (
        <div>
            <TempChild onPress={()=>onpress(5)} />
        </div>
    )
}

export default TempMid
