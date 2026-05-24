import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function LiveChart() {

  const data = [
    { day: "Mon", price: 2100 },
    { day: "Tue", price: 2200 },
    { day: "Wed", price: 2180 },
    { day: "Thu", price: 2250 },
    { day: "Fri", price: 2300 }
  ];

  return (

    <div className="
      bg-white
      rounded-3xl
      shadow-lg
      p-6
      h-[400px]
    ">

      <h2 className="
        text-2xl
        font-bold
        mb-5
      ">
        Market Trend
      </h2>

      <ResponsiveContainer
        width="100%"
        height="100%"
      >

        <LineChart data={data}>

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="price"
            stroke="#2563eb"
            strokeWidth={4}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default LiveChart;