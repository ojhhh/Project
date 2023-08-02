import React, { useCallback , useState } from 'react'
import { Link } from 'react-router-dom'
import { WorkspaceButton } from '@layouts/Workspace/style'
import NoteModal from '@components/NoteModal'
import StudyNoteThumbnail from '@components/StudyNoteThumbnail'

import CreateChannelModal from '@components/CreateChannelModal'






const ViewStudyNotes = () => {

  const [showStudyNote ,  setShowStudyNote] = useState(false)

  // 만든거 가져오기 
  const [showCreateChannelModal , setShowCreateChannelModal] = useState(false)

    // 현재 화면에 떠 있는 모든 모달을 다 닫는 메서드
    const onCloseModal = useCallback( () => {

      setShowCreateChannelModal(false);

  } , [])


  const onClickAddChannel = useCallback( () => {
    setShowCreateChannelModal(true)
} , []); 



  const onClickShowNote = () => {
    console.log("버튼 눌림")
    setShowStudyNote(!showStudyNote)
    console.log(showStudyNote)
   
}

  const handleShowNote = () => {
    if(showStudyNote) {
      return <NoteModal />
    }
  }


  return (
    <>
      
      <div>
      <Link to={'/workspace/hapse/channel/자유게시판'}>  학습노트 보러가기👇</Link> 

      <div>

        <WorkspaceButton onClick={onClickShowNote} >
          <StudyNoteThumbnail keyword={"고"}   />
        </WorkspaceButton>

        <WorkspaceButton>
          <StudyNoteThumbnail keyword={"정"}  />
        </WorkspaceButton>

        <WorkspaceButton>
          <StudyNoteThumbnail keyword={"처"}  />
        </WorkspaceButton>

        <WorkspaceButton>
          <StudyNoteThumbnail keyword={"수"}  />
        </WorkspaceButton>

        <WorkspaceButton>
          <StudyNoteThumbnail keyword={"2"}  />
        </WorkspaceButton>
        

      </div>

      </div>
    
      {/* 나오긴 하는데  */}
      {handleShowNote()}
    
    </>

  )
}

export default ViewStudyNotes