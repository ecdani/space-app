import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [{ name: 'Oxigeno', value: 400 }, { name: 'Ebola', value: 300 }];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  /* index, */
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default () => (
  <div className="container">
    <div className="row">Atmospheric comp.</div>
    <div className="row">
      <div>
        <PieChart width={105} height={105}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            label={renderCustomizedLabel}
            fill="#8884d8"
          >
            <Cell fill="red" />
            <Cell fill="black" />
          </Pie>
        </PieChart>
      </div>
    </div>
  </div>
);
