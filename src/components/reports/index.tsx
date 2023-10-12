import UbicationStatus from "./charts/ubication";
import TicketStatus from "./charts/ticket-status";
import TicketIncident from "./charts/incidents";

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
            <TicketIncident />
          </CardContent>

          <CardHeader title="Reporte por ubicación" />
          <CardContent>
            < UbicationStatus/>
          </CardContent>

        </Card>
    );
}