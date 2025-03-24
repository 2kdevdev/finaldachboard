
import React from 'react';

export default function PerformanceTiles() {
  const metrics = [
    { label: 'Sharpe Ratio', value: '0.34' },
    { label: 'Profit Factor', value: '7.83' },
    { label: 'Win Rate', value: '73.25%' },
    { label: 'Max Drawdown', value: '14.3%' },
    { label: 'CAGR', value: '38.23%' },
    { label: 'SQN Score', value: '95.4' },
    { label: 'Expectancy', value: '$619.13' },
    { label: 'Total Trades', value: '2,942' },
  ];

  return (
    <section className="bg-black py-10 px-4 text-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Performance Metrics</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-gray-900 p-4 rounded-lg shadow text-center">
            <div className="text-lg font-semibold text-gray-400">{metric.label}</div>
            <div className="text-2xl font-bold">{metric.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
