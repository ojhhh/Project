// react- draggable 사용해서 drag 기능 넣기
// 유저가 텍스트 넣을 수 있게 구현하기

// 유저가 직접 png 크기 조절하게 만들기 예시

import React, { useState } from 'react';
import Draggable from 'react-draggable';

const App = () => {
  const [imageSize, setImageSize] = useState({ width: 200, height: 150 });
  
  const handleDrag = (e, ui) => {
    const { width, height } = imageSize;
    const newWidth = width + ui.deltaX;
    const newHeight = height + ui.deltaY;
    setImageSize({ width: newWidth, height: newHeight });
  };

  return (
    <div>
      <Draggable onDrag={handleDrag}>
        <canvas width={imageSize.width} height={imageSize.height}>
          {/* 여기에 이미지를 그리는 로직을 추가할 수 있습니다. */}
        </canvas>
      </Draggable>
    </div>
  );
};

export default App;
