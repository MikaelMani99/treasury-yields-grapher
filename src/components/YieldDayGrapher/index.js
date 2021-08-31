import React from "react";
import { Line } from 'react-chartjs-2';
import Container from '../Container'


const YieldDayGrapher = ({days}) => {
  // filter out empty objects
  const days_data = []
  days.forEach(day => {
    if(Object.keys(day).length > 0){
      day.date = new Date(Date.parse(day.date))
      const colour = `#${Math.floor(Math.random()*16777215).toString(16)}`
      days_data.push(
        {
          label: `${day.date.toDateString()}`,
          data: Object.values(day.data),
          fill: false,
          backgroundColor: colour,
          borderColor:`${colour}22`,
        }
      )
    }
  });

    const data = {
      labels: ["one month", "two months", "three months", "six months", "one year", "two years", "three years", "five years", "seven years", "ten years", "twenty years", "thirty years"],
      datasets: days_data
    }
    return (
      <Container className="w-3/5">
          <Line data={data} />
      </Container>
    );
}

export default YieldDayGrapher