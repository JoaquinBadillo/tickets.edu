import { useGetList } from "react-admin";

interface locationData {
  name: string;
  value: number;
}

interface Response {
  data?: locationData[];
  loading?: boolean;
  error?: Error | null;
}

export const TicketLocationCount = (path: string) => {
  const res: Response = {};

  const { data, isLoading, error } = useGetList(path, {
    pagination: { page: 1, perPage: 10 },
    sort: { field: "date", order: "DESC" },
  });

  if (isLoading) res.loading = true;
  else if (error || data == null) res.error = error;
  else if (data) {
    const locationData = [
      { name: "Santa Fe", value: 0 },
      { name: "Toluca", value: 0 },
    ];

    for (const item of data) {
      if (item.location === "sf") locationData[0].value += 1;
      else if (item.location === "tol") locationData[1].value += 1;
    }

    res.data = locationData;
  }

  return res;
};
