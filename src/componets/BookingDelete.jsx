"use client";

import { AlertDialog, Button } from "@heroui/react";

export function BookingDelete({ booking }) {
    const handleDelete = async () => {
        const res = await fetch(`http://localhost:8000/bookings/${booking}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' }
        });
        const data = await res.json();
        console.log(data);
        window.location.reload()

    }
    return (
        <AlertDialog>
            <Button variant="danger">Delete Project</Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>My Awesome Project</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Delete Project
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}