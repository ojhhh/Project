import React from 'react'

import {DayCalcContainer} from '@components/DdayCalc/styles'

const DdayCalc = () => {
  return (
    <div> 
        <DayCalcContainer>             
            <p>수능 D-200 </p>
            <p>나의 일평균 공부시간 :  <span> 1.5 </span> </p>
            <p>합격자 일평균 공부시간 : <span> 5.5 </span> </p>
        </DayCalcContainer>

    </div>
  )
}

export default DdayCalc