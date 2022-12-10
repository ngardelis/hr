import React from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'REVENUE',
      },
    },
};

export const data = {
  labels: ['USA', 'Europe', 'Asia'],
  datasets: [
    {
      label: '$',
      data: [25020, 54210, 45533],
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        
      ],
      borderWidth: 1,
    },
  ],
};

const RevenueChart = () => {
  return (
    <>
        <Pie options={options} data={data} />
    </>
  )
}

export default RevenueChart