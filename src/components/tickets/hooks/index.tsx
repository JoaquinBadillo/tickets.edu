import { useRecordContext } from "react-admin";

export const TicketTitle = () => {
    const record = useRecordContext();
    return (
        <span>
            {record ? `${record?.title}` : "Ticket"}
        </span>
    );
};