import React from 'react';
import { PieChart, Pie } from 'recharts';

const data = [{ name: 'Group A', value: 400 }, { name: 'Group B', value: 300 }];

export default () => (
  <div className="atmospheric-page">
    <PieChart width={105} height={105}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={50}
        fill="#8884d8"
      />
    </PieChart>
  </div>
);
