
// valueChart.js
// component to visualise date/value dataset

import React, {} from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Typography from '@mui/material/Typography';

import { getColorWithAlpha } from '../styles/colors';

import { generateID } from '../tools/id';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// options for the date/value chart

const options = {
  responsive: true,
  scales: {},
  plugins: {
    legend: {
      display: false,
      position: 'bottom',
    },
    title: {
      display: false,
      text: '₿TC market value in €',
    },
  },
};

// ValueChart is BTC market value date/value line chart component

const ValueChart = ({data, id = 'default'}) => {
  const chartId = generateID(id, 'line_chart');
  return <TableRow id={id} data-testid={id} >
    <TableCell colSpan={3} >
      <React.Fragment>
        <Typography variant='subtitle1' sx={{color: getColorWithAlpha('warn', 0.8)}} >₿TC market value in €</Typography>
        <Line
          id={chartId}
          data-testid={chartId}
          options={options}
          datasetIdKey='BTCmarketvalue'
          data={data}
        />
      </React.Fragment>
    </TableCell>
  </TableRow>;
};

export default ValueChart;