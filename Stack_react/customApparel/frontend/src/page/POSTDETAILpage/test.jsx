import React from "react";

// 데이터 파싱 유틸리티 함수
const parseContent = (rawContent) => {
  const hashtagPattern = /#(\w+)/g;
  let match;
  const contentData = [];

  let lastIndex = 0;
  while ((match = hashtagPattern.exec(rawContent)) !== null) {
    const text = rawContent.slice(lastIndex, match.index);
    if (text) contentData.push({ type: "text", value: text });

    contentData.push({
      type: "hashtag",
      value: `#${match[1]}`,
      link: `https://kream.co.kr/social/tags/${match[1]}`,
    });

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < rawContent.length) {
    const remainingText = rawContent.slice(lastIndex);
    contentData.push({ type: "text", value: remainingText });
  }

  return contentData;
};

// 본문 내용 렌더링 컴포넌트
const PostContent = ({ data }) => {
  return (
    <span className="text">
      {data.map((item, index) => {
        if (item.type === "text") {
          return item.value;
        } else if (item.type === "hashtag") {
          return (
            <a key={index} className="hashtag" href={item.link}>
              {item.value}
            </a>
          );
        }
        return null;
      })}
    </span>
  );
};

// 테스트용 메인 컴포넌트
const TestComponent = () => {
  const rawContent =
    "등산룩🩶<br><br>#아식스조그100 #아이앱스튜디오 #글랙 #스컬프터 #플레어업 #등산룩 #고프코어 #고프코어룩 #바람막이코디";
  const parsedContent = parseContent(rawContent);

  return (
    <div>
      <PostContent data={parsedContent} />
    </div>
  );
};

export default TestComponent;
