// UbicationTickets.ts
import { useGetList } from "react-admin";

interface UbicationData {
  location: string;
  numberOfTickets: number;
}

interface Response {
  data?: UbicationData[];
  loading?: boolean;
  error?: Error | null;
}

export const UbicationTickets = (path: string) => {
  const res: Response = {};

  const { data, isLoading, error } = useGetList(path);

  if (isLoading) {
    res.loading = true;
  } else if (error || data == null) {
    res.error = error;
  } else if (data) {
    const ubicationData: UbicationData[] = [
      { location: "Santa Fe", numberOfTickets: 0 },
      { location: "Toluca", numberOfTickets: 0 },
    ];

    for (const item of data) {
      if (item.location === "Santa Fe") {
        ubicationData[0].numberOfTickets += 1;
      } else if (item.location === "Toluca") {
        ubicationData[1].numberOfTickets += 1;
      }
    }

    res.data = ubicationData;
  }

  return res;
};
