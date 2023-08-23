import { useRecordContext } from "react-admin";
import { Link } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

interface UrlFieldProps {
    source: string;
}

const CustomURL = ({ source }: UrlFieldProps) => {
    const record = useRecordContext();

    return record ? (
        <Link href={record[source]} sx={{ textDecoration: "none" }}>
            {record[source]}
            <LaunchIcon sx={{ fontSize: 15, ml: 1}} />
        </Link>
    ) : null;
};

export default CustomURL;