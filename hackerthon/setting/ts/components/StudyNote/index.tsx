import useInput from '@hooks/useInput'
import { Label , Input } from '@pages/Login/style'
import axios from 'axios'
import React, { useCallback } from 'react'
import Modal from '@components/Modal'


type StudyNoteProps = {
  cornell_type: string; // or any other appropriate type
};

const StudyNote: React.FC<StudyNoteProps> = ({cornell_type}) => {

  const [newCornellQuestion , onNewCornellQuestion , setNewCornellQuestion ] = useInput("")


  const onCreateCornellNote = useCallback ( (e) => {
    e.preventDefault();

    if(!newCornellQuestion) {return}

    axios.post('/api/studynote/question' , {
      newCornellQuestion : newCornellQuestion,
    } , {
      withCredentials : true, 
    })
    .then( () => {
      // 질문 input 초기화 하기 
      setNewCornellQuestion('')
      // revalidateUser(); 이것도 해야하는 건지 모르겠음.
    })
    .catch((error)=>{
      console.log(error)
    })

  } , [newCornellQuestion])


  return (

    <>
      {/* 제목 */}
        

      {/* 오늘 공부 키워드 */}

      {/* D-n 일 , 나의 평균 공부 시간 VS 합격자 평균 공부 시간 */}

      {/* 오늘 공부 키워드 학습 링크 ex) 오덕배 합격자가, 이차방정식에 대해서, 어떻게 공부했는지 알아보기*/}


      {/* 오늘 공부 목표 : SMART */}
      <div> 
        <form onSubmit={onCreateCornellNote} > 

        {/* 질문 컬럼 */}
        <Label id="note-column-question-label" >
          <span>{cornell_type}</span>
          <Input id="note-column-question" value={newCornellQuestion} onChange={onNewCornellQuestion} />  
        </Label>
    
        {/* 노트 컬럼 */}

        {/* 요약 컬럼 */}


        </form>
      </div>
    </>

  )
}

export default StudyNote