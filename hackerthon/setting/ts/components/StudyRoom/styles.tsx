import styled from '@emotion/styled';


export const PageContainer = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    justify-content : center;
`

export const TitleContainer = styled.div`
    /* background-color : blue; */
    display : flex; 
    justify-content: space-between;
`

export const KeywordContainer = styled.div `
    display : flex; 
    justify-content: space-between;
    align-items : center;
    
`

export const ZoomContainer = styled.div `
    width : 100%;
    height : 100%;
    background-color : #e7e7e7;

`

export const StudyNoteContainer = styled.div `
    width : 100%;
    height : 100%;
    background-color : #f0efef;
`


export const CornellContainer = styled.div `
    display : flex;
    flex-wrap : wrap;

    & > div {
        width : 100% 
    }
`


export const NotetakingContainer = styled.div`
    display : flex;
    /* width : 100%; */
    /* font-size : 10px; */

    & > div > form > label > input  {
        height : 280px; 
        width : 350px;
    }
`


export const ViewStudyNotesContainer = styled.div`
    display : flex;
    justify-content: center;
    width : 100%


`