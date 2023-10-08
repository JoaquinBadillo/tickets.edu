import TicketStatus from "./charts/ticket-status";

import { 
    Card, 
    CardContent, 
    CardHeader
} from "@mui/material";

export function ReportDashboard() {
    return (
        <Card>

          <CardHeader title="Reporte Semanal" />
          <CardContent>
            <TicketStatus />
          </CardContent>

          <CardHeader title="Reporte por incidentes" />
          <CardContent>
            <TicketStatus />
          </CardContent>

          <CardHeader title="Reporte por ubicación" />
          <CardContent>
            <TicketStatus />
          </CardContent>

        </Card>
    );
}