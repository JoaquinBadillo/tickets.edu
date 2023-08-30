import { useRecordContext } from "react-admin";

export const UserTitle = () => {
    const record = useRecordContext();
    return (
        <span>
            {record ? `"${record.name}"` : "User"}
        </span>
    );
};