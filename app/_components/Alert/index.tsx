import React from "react";
import { Alert, Button } from "@material-tailwind/react";

export function AlertDismissible() {
    const [open, setOpen] = React.useState(true);

    return (
        <>
            <Alert open={open} onClose={() => setOpen(false)}>
                A dismissible alert for showing message.
            </Alert>
        </>
    );
}