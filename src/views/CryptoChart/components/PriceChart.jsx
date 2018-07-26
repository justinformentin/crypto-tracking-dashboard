import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import ChartTitle from './ChartTitle';
import DateRange from './DateRange';
import ErrorMessage from './ErrorMessage';
import styles from './PriceChart.css';

/**
* @function PriceChart
* @description React component that renders ChartTitle, DateRange and LineChart components.
* Includes conditional logic to render ErrorMessage component if user inputs invalid date range.
*/

const PriceChart = props => (
  <div className={styles.price_container}>
    <div className={styles.chart_Container}>
      <ChartTitle
        cryptoName={props.cryptoName}
        cryptoSymbol={props.cryptoSymbol}
      />
      <DateRange
        startDate={props.startDate}
        endDate={props.endDate}
        activeBtn={props.activeBtn}
        changeStartDate={props.changeStartDate}
        changeEndDate={props.changeEndDate}
        clickHandler={props.clickHandler}
      />
      {props.invalidDateRange ? (
        <ErrorMessage />
      ) : (
        <ResponsiveContainer width="98%" height={props.height}>
          <AreaChart
            width={props.width}
            height={props.height}
            data={props.priceData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#20a8d8" stopOpacity={0.9}/>
                <stop offset="95%" stopColor="#20a8d8" stopOpacity={0.6}/>
              </linearGradient>
            </defs>  
            <XAxis
              dataKey="date"
              padding={{ left: 10 }}
              minTickGap={30}
              tickFormatter={props.formatDateScales}
            />
            <YAxis
              type="number"
              domain={['auto', 'auto']}
              label={{ value: 'Price (USD)', angle: -90, position: 'insideLeft' }}

            />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip labelFormatter={props.formatTooltipLabel} />
            <Area
              type="monotone"
              dataKey="Price (USD)"
              stroke="#20a8d8"
              fillOpacity={1} 
              fill="url(#colorUv)"
              isAnimationActive={false}
              dot={false}
            />
          </AreaChart>
        <ResponsiveContainer>  
      )}
    </div>
  </div>
);

export default PriceChart;
