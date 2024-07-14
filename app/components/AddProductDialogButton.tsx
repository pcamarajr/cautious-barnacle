"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import { AddProductForm } from "@/app/components";

export const AddProductDialogButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button onClick={handleOpen}>Add New</button>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogBackdrop />
        <DialogPanel>
          <DialogTitle>Add new product</DialogTitle>
          <AddProductForm />
        </DialogPanel>
      </Dialog>
    </>
  );
};
