
import React from 'react'


interface StudyNoteThumbnailProps {
    keyword: string;
    }

const StudyNoteThumbnail: React.FC<StudyNoteThumbnailProps>  = ({keyword}) => {
    return (
        <div> 
            {keyword} 
        </div>
    )
}

export default StudyNoteThumbnail