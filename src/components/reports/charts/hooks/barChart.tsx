import { useGetList } from "react-admin";

interface BarData {
    name: string;
    value: number;
}

interface Response {
    data ?: BarData[];
    loading ?: boolean;
    error ?: Error | null;
}

export const TicketIncidentCount = (path: string) => {
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
        const barData = [
            // toca hacer esto más chico
            { name: "Servicios", value: 0 },
            { name: "Digital", value: 0 },
            { name: "Infraestructura" , value: 0 },
            { name: "Recursos Humanos" , value: 0 },
            { name: "Beneficiarios" , value: 0 },
            { name: "Mobiliario" , value: 0 },
            { name: "Seguridad" , value: 0 },
            { name: "Materiales" , value: 0 },
            { name: "Fenómenos Meteorológicos" , value: 0 }
        ];

        for (const item of data) {
        if (item.category === "Servicios")
            barData[0].value += 1;
        else if (item.category === "Digital")
            barData[1].value += 1;
        else if (item.category === "Infraestructura")
            barData[2].value += 1;
        else if (item.category === "Recursos Humanos")
            barData[3].value += 1;
        else if (item.category === "Beneficiarios")
            barData[4].value += 1;
        else if (item.category === "Mobiliario")
            barData[5].value += 1;
        else if (item.category === "Seguridad")
            barData[6].value += 1;
        else if (item.category === "Materiales")
            barData[7].value += 1;
        else if (item.category === "Fenómenos Meteorológicos")
            barData[8].value += 1;
        }

        res.data = barData;
    }

    return res;
};