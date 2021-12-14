import { FC } from "react";
import { Container, Title, Day, Time } from "./style";

interface ScheduleProps {
  schedule: { time: string; days: string[] };
}

const Schedule: FC<ScheduleProps> = ({ schedule }) => {
  const { days, time } = schedule;
  return (
    <Container>
      <Title>Schedule:</Title>
      {days.map((day, index) =>
        index === 0 ? (
          <Day>{`${day}`}</Day>
        ) : index === days.length - 1 ? (
          <Day> {`and ${day}`}</Day>
        ) : (
          <Day>{`, ${day}`}</Day>
        )
      )}
      <Time>{`at ${time}`}</Time>
    </Container>
  );
};

export { Schedule };
