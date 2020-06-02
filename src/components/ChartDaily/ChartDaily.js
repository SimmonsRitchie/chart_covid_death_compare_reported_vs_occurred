import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  YAxis,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import PropTypes from 'prop-types';
import { formatUnix } from '../../utils/formatters';
import ChartTooltip from './Tooltip';
import ChartWrapper from './ChartWrapper'

const ChartDaily = ({
  title, chartType, data, dataKey, customLegend, colorFill, colorStroke,
}) => (
  <ChartWrapper title={title}>
  <ResponsiveContainer>
    <ComposedChart
      margin={{
        top: 0,
        right: 5,
        left: 0,
        bottom: 0,
      }}
      data={data}
    >
      <XAxis
        dataKey="date"
        tick={{ fontSize: 12 }}
        type="category"
        tickFormatter={formatUnix}
      />
      <YAxis 
      width={40}
      tick={{ fontSize: 12 }}
      domain={[0, 600]}
      />
      <Tooltip
        content={({ active, payload, label }) => (
          <ChartTooltip
            active={active}
            payload={payload}
            label={label}
            chartType={chartType}
          />
        )}
      />
      <Bar dataKey={dataKey} fill={colorFill} />
      <Line
        type="monotone"
        dataKey="avg"
        stroke={colorStroke}
        strokeWidth={2}
        dot={false}
      />
      <Legend
        verticalAlign="top"
        align="left"
        iconType="square"
        iconSize={10}
        height={45}
        content={customLegend}
      />
    </ComposedChart>
  </ResponsiveContainer>
  </ChartWrapper>
);

ChartDaily.defaultProps = {
  title: null
}

ChartDaily.propTypes = {
  title: PropTypes.string,
  chartType: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataKey: PropTypes.string.isRequired,
  customLegend: PropTypes.node.isRequired,
  colorFill: PropTypes.string.isRequired,
  colorStroke: PropTypes.string.isRequired,
};

export default ChartDaily;
