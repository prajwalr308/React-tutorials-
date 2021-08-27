import React from 'react'
import TempChild from './TempChild'

const TempMid = ({onpress=f=>f}) => {
    return (
        <div>
            <TempChild onPress={onPress} />
        </div>
    )
}

export default TempMid
