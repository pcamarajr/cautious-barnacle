"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import {
  ControlledCheckbox,
  ControlledCombobox,
  ControlledNumber,
  ControlledSelect,
  ControlledText,
  ToastContainer,
} from "@/app/components";

const UNITS = [
  { label: "kilo", value: "kg" },
  { label: "gram", value: "g" },
  { label: "liter", value: "l" },
  { label: "mili liter", value: "ml" },
  { label: "piece", value: "pc" },
];

const VAT = [
  { label: "0%", value: 0 },
  { label: "5%", value: 5 },
  { label: "10%", value: 10 },
  { label: "20%", value: 20 },
];

export const AddProductForm = () => {
  const { control, handleSubmit, getValues } = useForm<Product>({
    defaultValues: {
      isProduct: true,
      isService: false,
      name: "Pedro",
      description: "asdakjsdakshjd",
      unitId: "kg",
      price: 726,
      vat: 10,
    },
  });

  const onSubmit = (data: Product) => {
    Promise.resolve(data).then((data) => {
      console.log("Submitted data:", data);
      toast("Record added", { type: "success" });
    });
  };

  const onAddUnit = (description: string) =>
    Promise.resolve({
      value: Math.random().toString(36).substr(2, 9),
      label: description,
    }).then((unit) => {
      console.log("Added new unit:", unit);
      toast(`The '${unit.label}' was added as a new measuring unit.`, {
        type: "success",
      });
      return unit;
    });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <ControlledCheckbox
            name="isProduct"
            control={control}
            label="Product"
          />
          <ControlledCheckbox
            name="isService"
            control={control}
            label="Service"
          />
        </div>
        <ControlledText name="name" control={control} label="Product Name" />
        <ControlledText
          name="description"
          control={control}
          label="Description"
        />
        <ControlledCombobox
          name="unitId"
          control={control}
          label="Units"
          options={[...UNITS]}
          onAddNew={onAddUnit}
        />
        <ControlledNumber
          name="price"
          control={control}
          label=" Unit Price (net)"
        />
        <ControlledSelect
          name="vat"
          control={control}
          label="VAT"
          options={VAT}
        />

        <button type="submit">Add new</button>
      </form>
      <ToastContainer />
    </>
  );
};
