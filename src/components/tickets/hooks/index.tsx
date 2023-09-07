import { useRecordContext } from "react-admin";

export const PostTitle = () => {
    const record = useRecordContext();
    return (
        <span>
            {record ? `"${record?.title}"` : "Ticket"}
        </span>
    );
};