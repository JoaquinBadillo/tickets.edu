import { Button, TextInput, ReferenceInput, useUpdate, useRecordContext, useNotify } from "react-admin";

import { useEffect, useState } from "react";

export const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" />
];

export const UpdateStatus = () => {
    const statusList = ["Abierto", "En Progreso", "Cerrado"];
    const record = useRecordContext();
    const notify = useNotify();
    const status = record.status;
    const isClosed = status === "Cerrado";

    const diff = (
        isClosed ? 
            statusList[statusList.indexOf(status) + 1] : 
            status
    );

    const [update, { isLoading, error }] = useUpdate(
        'tickets',
        { id: record.id, data: diff, previousData: record }
    );
    const handleClick = () => {
        update()
    }
    if (error) { notify('Error al actualizar'); }
    return (
        <Button disabled={isClosed || isLoading} onClick={handleClick}>
            Actualizar Estado
        </Button>
    );
}