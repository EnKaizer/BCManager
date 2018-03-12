import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveLine } from '@nivo/line';

const data = [
  {
    id: 'voce',
    color: 'hsl(238, 70%, 50%)',
    data: [
      {
        color: 'hsl(245, 70%, 50%)',
        x: 'JAN',
        y: 57,
      },
      {
        color: 'hsl(100, 70%, 50%)',
        x: 'FEV',
        y: 5,
      },
      {
        color: 'hsl(225, 70%, 50%)',
        x: 'MAR',
        y: 6,
      },
      {
        color: 'hsl(141, 70%, 50%)',
        x: 'ABR',
        y: 29,
      },
      {
        color: 'hsl(261, 70%, 50%)',
        x: 'MAI',
        y: 58,
      },
      {
        color: 'hsl(259, 70%, 50%)',
        x: 'JUN',
        y: 14,
      },
      {
        color: 'hsl(245, 70%, 50%)',
        x: 'JUL',
        y: 41,
      },
      {
        color: 'hsl(277, 70%, 50%)',
        x: 'AUG',
        y: 2,
      },
      {
        color: 'hsl(282, 70%, 50%)',
        x: 'SET',
        y: 47,
      },
    ],
  },
  {
    id: 'time',
    color: 'hsl(354, 70%, 50%)',
    data: [
      {
        color: 'hsl(234, 70%, 50%)',
        x: 'JAN',
        y: 8,
      },
      {
        color: 'hsl(275, 70%, 50%)',
        x: 'FEV',
        y: 45,
      },
      {
        color: 'hsl(295, 70%, 50%)',
        x: 'MAR',
        y: 27,
      },
      {
        color: 'hsl(33, 70%, 50%)',
        x: 'ABR',
        y: 2,
      },
      {
        color: 'hsl(336, 70%, 50%)',
        x: 'MAI',
        y: 19,
      },
      {
        color: 'hsl(112, 70%, 50%)',
        x: 'JUN',
        y: 25,
      },
      {
        color: 'hsl(142, 70%, 50%)',
        x: 'JUL',
        y: 15,
      },
      {
        color: 'hsl(266, 70%, 50%)',
        x: 'AUG',
        y: 20,
      },
      {
        color: 'hsl(107, 70%, 50%)',
        x: 'SET',
        y: 57,
      },
    ],
  },
];

const UserEvolutionView = props => {
  return (
    <ResponsiveLine
      data={data}
      margin={{
        top: 10,
        right: 110,
        bottom: 50,
        left: 60,
      }}
      minY="auto"
      stacked={true}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'projetos',
        legendOffset: 36,
        legendPosition: 'center',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'quantidade',
        legendOffset: -40,
        legendPosition: 'center',
      }}
      dotSize={10}
      dotColor="inherit:darker(0.3)"
      dotBorderWidth={2}
      dotBorderColor="#ffffff"
      enableDotLabel={true}
      dotLabel="y"
      dotLabelYOffset={-12}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          translateX: 100,
          itemWidth: 80,
          itemHeight: 20,
          symbolSize: 12,
          symbolShape: 'circle',
        },
      ]}
    />
  );
};

UserEvolutionView.propTypes = {};

export default UserEvolutionView;
