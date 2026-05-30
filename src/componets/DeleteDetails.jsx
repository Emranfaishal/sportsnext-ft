"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";

export function DeleteDetails({ data }) {

    const router = useRouter();

    const handleDelete = async () => {
        try {
            const res = await fetch(`http://localhost:8000/spots/${data._id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            });

            const result = await res.json();
            console.log(result);

            if (result.deletedCount > 0) {
                router.push('/allFacilities');
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AlertDialog>
            <Button variant='outline' className='rounded-lg w-full text-red-500'>
                <MdDelete /> Delete
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">

                        <AlertDialog.CloseTrigger />

                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>
                                Delete {data.destinationName} permanently?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>

                        <AlertDialog.Body>
                            <p>
                                This will permanently delete
                                <strong> {data.destinationName} </strong>
                                and all of its data.
                            </p>
                        </AlertDialog.Body>

                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>

                            <Button onClick={handleDelete} variant="danger">
                                Permanently Delete
                            </Button>
                        </AlertDialog.Footer>

                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}