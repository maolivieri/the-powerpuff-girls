import { FC, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { ExpandedText, Text } from "./style";

interface SummaryProps {
  summary: string;
}

const Summary: FC<SummaryProps> = ({ summary }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      {expanded ? (
        <ExpandedText>{ReactHtmlParser(summary)}</ExpandedText>
      ) : (
        <Text>{ReactHtmlParser(summary)}</Text>
      )}
    </>
  );
};

export { Summary };
