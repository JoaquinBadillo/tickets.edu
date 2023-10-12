import { 
    Cell,  
    Bar, 
    BarChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

import { TooltipProps } from "recharts";

import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";

import { TicketIncidentCount } from "./hooks/barChart";
import { Loading } from "react-admin";
import { useMediaQuery, Theme} from "@mui/material";

import { Box } from "@mui/system";

import "../styles.css";

const COLORS = ["#cc4747", "#e17844", "#d8be43", "#5ea73b", "#3887a1", "#254b6b", "#7b4ec6", "#8d3186", "#ee82ee"];

export default function TicketBarChart() {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
  const res = TicketIncidentCount("reports/incidents");

  if (res.loading) return <Loading />;
  if (res.error || res.data == null) return <p>ERROR</p>;

  return (
    <Box className="chart-container">
      <h2 className='chart-title'>Tickets por Incidente</h2>
      {
        isSmall ?
          <TicketIncidentSmall data={res.data}/> :
          <TicketIncident data={res.data}/> 
      }
    </Box>
  );
}

interface IReport {
  name: string;
  value: number;
}

const TicketIncident = ({data}: {data: IReport[]}) => (
    <ResponsiveContainer width='90%' minWidth={400} height={300}>
        <BarChart 
          width={400} 
          height={200} 
          data={data} 
          margin={{left: 0, right: 0, top: 20, bottom: 40}}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />}/>
          <Bar dataKey="value">
          { 
              data.map((_, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]} 
                />
              ))
            }
          </Bar>
        </BarChart>
    </ResponsiveContainer>
);

const TicketIncidentSmall = ({data}: {data: IReport[]}) => (
  <ResponsiveContainer width='99%' height={300}>
      <BarChart 
          width={300}
          height={200} 
          data={data} 
          margin={{left: 0, right: 0, top: 20, bottom: 40}}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />}/>
          <Bar dataKey="value" fill="#F48686">
          { 
              data.map((_, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]} 
                />
              ))
            }
          </Bar>
        </BarChart>
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
}