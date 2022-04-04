import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
  Legend,
} from 'recharts';

export const Areachart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorInvestment" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8E05C2" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8E05C2" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4E9F3D" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#4E9F3D" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorSell" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#000000" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#000000" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" />
        <YAxis />

        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="investment"
          stroke="#8E05C2"
          fillOpacity={1}
          fill="url(#colorInvestment)"
        />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#4E9F3D"
          fillOpacity={1}
          fill="url(#colorRevenue)"
        />
        <Area
          type="monotone"
          dataKey="sell"
          stroke="#000000"
          fillOpacity={1}
          fill="url(#colorSell)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
