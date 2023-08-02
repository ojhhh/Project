import React from 'react'
import Webcam from './Webcam'
import Timer from './Timer'
import { useEffect, useState } from 'react';
// style css 임포트 방식
    // import { ChatZone, Section } from '@components/ChatList/styles'
    import { PageContainer, 
        ZoomContainer , 
        StudyNoteContainer , 
        TitleContainer , 
        KeywordContainer , 
        CornellContainer, 
        NotetakingContainer, 
        ViewStudyNotesContainer
    } from '@components/StudyRoom/styles'

    import StudyNote from '@components/StudyNote'
    import DdayCalc from '@components/DdayCalc'
    import ViewStudyNotes from '@components/ViewStudyNotes'


const StudyRoom = () => {
  return (
    
    <>
        {/* 전체 감싸는 곳 */}
        <PageContainer>
            
            {/* 줌 styled component 👇 */}
            <ZoomContainer>
                <Webcam/>
                <Timer />
            </ZoomContainer>


            {/* 코넬 학습일지 */}
            <StudyNoteContainer>

                <div className='studynote_container' > 

                            
                        <TitleContainer>
                        {/* 제목 */}
                            <h3 style={{marginLeft : "10px"}}> 오늘의 공부 </h3>
                        
                        {/* 합격자 평균 비교
                            <DdayCalc /> */}
                        </TitleContainer>

                    <div className='top_2_container' >
                        <KeywordContainer >

                        {/* 학습 키워드  */}
                            <StudyNote cornell_type="Study Keyword" /> 

                        {/* 해당 학습 키워드, 스터디 노트 보기 */}
                        <ViewStudyNotesContainer>
                            <ViewStudyNotes />
                        </ViewStudyNotesContainer>
                        
                        {/* 합격자 평균 비교 */}
                        <DdayCalc />

                        </KeywordContainer>
                    </div>


                        <CornellContainer>

                            
                            <StudyNote cornell_type="Title" />  

                            <NotetakingContainer> 
                                <StudyNote cornell_type="Question" /> 
                                <StudyNote cornell_type="NoteTaking"/> 
                            </NotetakingContainer>
                        
                            <StudyNote cornell_type="Summary"/> 
                        
                        </CornellContainer>                    

                </div>    
            </StudyNoteContainer>
        
        
        </PageContainer>
        
    </>

    )
}

export default StudyRoom