import { 
    Cell, 
    Legend,
    Pie, 
    PieChart, 
    ResponsiveContainer,
    Tooltip
} from "recharts";

import { TooltipProps } from "recharts";

import {
    ValueType,
    NameType,
} from "recharts/types/component/DefaultTooltipContent";


import { TicketStatusState } from "./hooks/pieChart";
import { Loading } from "react-admin";
import { useMediaQuery, Theme} from "@mui/material";

import { Box } from "@mui/system";

import "../styles.css";

const COLORS = ["#AEE256", "#5668E2", "#A66BC4"];

export default function TicketPieChart() {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
  const res = TicketStatusState("reports/status");

  if (res.loading) return <Loading />;
  if (res.error || res.data == null) return <p>ERROR</p>;

  return (
    <Box className="chart-container">
      <h2 className='chart-title'>Estado de los Tickets</h2>
      {
        isSmall ?
          <TicketStatusSmall data={res.data}/> :
          <TicketStatus data={res.data}/> 
      }
    </Box>
  );
}

interface IReport {
  name: string;
  value: number;
}

const TicketStatus = ({data}: {data: IReport[]}) => (
    <ResponsiveContainer width='40%' minWidth={400} height={300}>
        <PieChart 
          width={400} 
          height={200} 
          data={data} 
          margin={{left: 30, right: 40, top: 20, bottom: 40}}
        >
          <Tooltip content={<CustomTooltip />}/>
          <Legend 
            formatter={(value) => <span className="text">Tickets {value}</span>}
            layout="vertical" 
            verticalAlign="top" 
            align="right"
          />
          <Pie
              isAnimationActive={false}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="value"
          >
            { 
              data.map((_, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]} 
                />
              ))
            }
          </Pie>
        </PieChart>
    </ResponsiveContainer>
);

const TicketStatusSmall = ({data}: {data: IReport[]}) => (
  <ResponsiveContainer width='99%' height={300}>
      <PieChart
        width={300}
        height={200} 
        data={data}
      >
        <Tooltip content={<CustomTooltip />}/>
        <Legend 
          formatter={(value) => <span className="text">Tickets {value}</span>}
          layout="horizontal" 
          verticalAlign="bottom" 
          align="center"
        />
        <Pie
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            dataKey="value"
        >
          { 
            data.map((_, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index % COLORS.length]} 
              />
            ))
          }
        </Pie>
      </PieChart>
  </ResponsiveContainer>
);

const CustomTooltip = ({ active, payload} : TooltipProps<ValueType, NameType>) => {
  const capitalize = (s: string) => (
      s.charAt(0).toUpperCase() + s.slice(1)
  );

  const disp = (v: number, s: string) => (
      `${v} ${v == 1 ? s : `${s}s`}`
  );

  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="title">{capitalize(payload[0].payload.name)}: </p>
        <p className="value">{disp(payload[0].value as number, "ticket")}</p>
      </div>
    );
  }
  
  return null;
};