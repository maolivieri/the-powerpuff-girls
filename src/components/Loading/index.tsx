import { Container } from "./style";

import Lottie from "react-lottie";
import LoadingData from "../../assets/loading.json";

const Loading = () => {
  return (
    <Container>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: LoadingData,
        }}
        height={400}
        width={400}
      />
    </Container>
  );
};

export { Loading };
