import React, { useState } from "react";
import { Text, Text_Span, More } from "./PostDetail.styled";

const Content = ({ content }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Text
      expanded={expanded}
      onClick={() => {
        if (content.length > 10 && !expanded) {
          setExpanded(true);
        }
      }}
    >
      <Text_Span expanded={expanded}>
        {content.slice(0, expanded ? content.length : 10)}
      </Text_Span>
      {content.length > 10 && !expanded && <More>더보기</More>}
    </Text>
  );
};

export default Content;
