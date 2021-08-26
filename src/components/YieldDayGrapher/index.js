import React from "react";
import { Line } from 'react-chartjs-2';


const YieldDayGrapher = ({data}) => {
    const datas = {
        labels: Object.keys(data),
        datasets: [
          {
            label: `Yields for date ${data.date}`,
            data: Object.values(data),
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      };
    return (
        <Line data={datas} />
    );
}

export default YieldDayGrapher