import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const MyChart = () => {
  const data = [
    {
      month: 'Mar',
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: 'Apr',
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: 'May',
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: 'Jun',
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: 'Jul',
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: 'Aug',
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];

  return (
    <div className='investment-chart'>
      <h2 className="text-3xl text-center text-gray-400 pt-10">
        Investment vs Revenue with BarChart{' '}
      </h2>
      <div className="bar-chart flex justify-center my-10">
        <BarChart width={730} height={350} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
          <Legend />
          <Bar dataKey="investment" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </div>
      <h2 className="text-3xl text-center text-gray-400 pt-10">
        Monthly sell with LineChart{' '}
      </h2>
      {/* lineChart  */}
      <div className="line-chart flex justify-center items-center">
        <LineChart
          width={730}
          height={350}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="month" stroke="#e67e22" />
          <Line type="monotone" dataKey="sell" stroke="#8e44ad" />
        </LineChart>
      </div>
    </div>
  );
};

export default MyChart;
