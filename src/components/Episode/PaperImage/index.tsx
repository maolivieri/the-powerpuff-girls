import { FC } from "react";
import { Background, Hover, Blur, SeeMore, SeeMoreButton } from "./style";

interface PaperImageProps {
  image: string;
  id: number;
  handleEpisodeClick: (episodeId: number) => void;
}

const PaperImage: FC<PaperImageProps> = ({ image, handleEpisodeClick, id }) => {
  return (
    <Background image={image}>
      <Hover onClick={() => handleEpisodeClick(id)}>
        <Blur />
        <SeeMoreButton>
          <SeeMore>See More</SeeMore>
        </SeeMoreButton>
      </Hover>
    </Background>
  );
};

export { PaperImage };
