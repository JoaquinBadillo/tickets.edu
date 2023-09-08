import { useGetList } from "react-admin";

interface PieData {
    name: string;
    value: number;
}

interface Response {
    data ?: PieData[];
    loading ?: boolean;
    error ?: Error | null;
}

export const TicketStatusState = (path: string) => {
    const res : Response = {};
    
    const { data, isLoading, error } = useGetList(
        path,
        { 
          pagination: { page: 1, perPage: 10 },
          sort: { field: "date", order: "DESC" }
        }
    );
    
    if (isLoading)
        res.loading = true;

    else if (error || data == null)
        res.error = error;

    else if (data) {
        const pieData = [
            { name: "abiertos", value: 0 },
            { name: "cerrados", value: 0 },
            { name: "en progreso" , value: 0 },
        ];

        for (const item of data) {
        if (item.status === "Open")
            pieData[0].value += 1;
        else if (item.status === "Closed")
            pieData[1].value += 1;
        else if (item.status === "In Progress")
            pieData[2].value += 1;
        }

        res.data = pieData;
    }

    return res;
};