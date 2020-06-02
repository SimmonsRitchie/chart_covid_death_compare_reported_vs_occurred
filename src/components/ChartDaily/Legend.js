import React from 'react';

const CustomLegend = (props) => {
  const { payload, label1, label2 } = props;
  return (
    <ul className="chart-daily-legend__container">
      {payload.map((entry, i) => (
        <li key={entry.dataKey}>
          <span
            className={`legend-item-color ${
              entry.payload.legendType === 'line' ? 'line-color' : ''
            }`}
            style={{
              backgroundColor: `${
                entry.payload.legendType === 'line'
                  ? entry.payload.stroke
                  : entry.payload.fill
              }`,
            }}
          />
          {i === 0 ? label1 : label2}
        </li>
      ))}
    </ul>
  );
};

export default CustomLegend;
