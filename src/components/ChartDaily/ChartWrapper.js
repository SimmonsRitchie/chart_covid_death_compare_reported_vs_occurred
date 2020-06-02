import React from 'react';
import ChartHeader from './ChartHeader';

const ChartWrapper = ({ children, title, description }) => (
  <div className="chart-daily-chart-wrapper__container">
    <ChartHeader title={title} description={description} />
    <div className="chart-daily-chart-wrapper__responsive-outer">
      <div className="chart-daily-chart-wrapper__responsive-inner">
        {children}
      </div>
    </div>
  </div>
);
export default ChartWrapper;
