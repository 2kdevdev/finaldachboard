
import { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';

export default function SyncifyGoldDashboard() {
  const [equityData, setEquityData] = useState([]);

  useEffect(() => {
    setEquityData([
      // Added drawdown data

      { month: 'Jan', equity: 100000, drawdown: 0 },
      { month: 'Feb', equity: 185499, drawdown: 1.2 },
      { month: 'Mar', equity: 273050, drawdown: 0.6 },
      { month: 'Apr', equity: 471999, drawdown: 1.5 },
      { month: 'May', equity: 620325, drawdown: 2.4 },
      { month: 'Jun', equity: 772651, drawdown: 3.0 },
      { month: 'Jul', equity: 935729, drawdown: 2.6 },
      { month: 'Aug', equity: 1061050, drawdown: 4.8 },
      { month: 'Sep', equity: 1168368, drawdown: 3.3 },
      { month: 'Oct', equity: 1318896, drawdown: 6.9 },
      { month: 'Nov', equity: 1469823, drawdown: 5.7 },
      { month: 'Dec', equity: 1564268, drawdown: 4.2 }
    ]);
  }, []);

  return (
    <div style={{
      background: 'black',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      padding: '2rem',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>
        Syncify ProfitGuard
      </h1>
      <p style={{ color: '#999', textAlign: 'center', marginBottom: '2rem' }}>
        Real Backtest. Real Edge.
      </p>

      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        <Metric label="Net Profit" value="$1,821,485" />
        <Metric label="Win Rate" value="73.25%" />
        <Metric label="Profit Factor" value="7.83" />
        <Metric label="Max Drawdown" value="14.3%" />
        <Metric label="Expectancy" value="$619.13" />
        <Metric label="Monthly Avg Profit" value="$121,432" />
      </section>

      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1.25rem' }}>Equity Growth</h2>
        <PerformanceTiles />
  <StrategyHighlights />
  <TrustAndCTA />
</div>
      <div style={{ background: '#111', padding: '1rem', borderRadius: '8px', height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={equityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="month" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip />
            <Line type="monotone" dataKey="equity" stroke="#00ffcc" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="drawdown" stroke="#ff6b6b" strokeDasharray="5 5" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
        <PerformanceTiles />
  <StrategyHighlights />
  <TrustAndCTA />
</div>
      <PerformanceTiles />
  <StrategyHighlights />
  <TrustAndCTA />
</div>
  );
}

function Metric({ label, value }) {
  return (
    <div style={{
      background: '#111',
      padding: '1rem',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <div style={{ fontSize: '0.85rem', color: '#888' }}>{label}  <PerformanceTiles />
  <StrategyHighlights />
  <TrustAndCTA />
</div>
      <div style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '0.25rem' }}>{value}  <PerformanceTiles />
  <StrategyHighlights />
  <TrustAndCTA />
</div>
      <PerformanceTiles />
  <StrategyHighlights />
  <TrustAndCTA />
</div>
  );
}
