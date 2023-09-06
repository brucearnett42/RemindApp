"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import CreateCollectionSidebar from "./CreateCollectoinSidebar";

export default function CreateCollectionButton() {
    const [open, setOpen] = useState(false);
    const handleOpenChange = (open: boolean) => setOpen(open);

    return (
        <div className="w-full rounded-md p-[1px]">
            <Button variant={"outline"} className="dark:text-white w-full dark:bg-neutral-950 bg-white" onClick={() => setOpen(true)}>
                Create Collection
            </Button>
            <CreateCollectionSidebar open={open} onOpenChange={handleOpenChange} />
        </div>
    );
}