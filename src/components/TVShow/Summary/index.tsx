import { FC, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import HTMLEllipsis from "react-lines-ellipsis/lib/html";
import { ExpandedText, ReadMore, Text } from "./style";

interface SummaryProps {
  summary: string;
}

const Summary: FC<SummaryProps> = ({ summary }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {expanded ? (
        <ExpandedText>{ReactHtmlParser(summary)}</ExpandedText>
      ) : (
        <Text>
          <HTMLEllipsis
            unsafeHTML={summary}
            maxLine='3'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
          <ReadMore onClick={() => setExpanded(true)}>Read more</ReadMore>
        </Text>
      )}
    </>
  );
};

export { Summary };
