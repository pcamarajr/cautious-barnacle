"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import {
  ControlledCheckbox,
  ControlledNumber,
  ControlledSelect,
  ControlledText,
  UnitComboBox,
} from "@/app/components";
import { useMutateProduct } from "@/app/services";

const VAT = [
  { label: "0%", value: 0 },
  { label: "5%", value: 5 },
  { label: "10%", value: 10 },
  { label: "20%", value: 20 },
];

export const AddProductForm = () => {
  const { mutate: addProduct } = useMutateProduct();
  const { control, handleSubmit, getValues } = useForm<Product>({
    defaultValues: {
      isProduct: true,
      isService: false,
      name: "Pedro",
      description: "asdakjsdakshjd",
      unitId: "2ji8",
      price: 726,
      vat: 10,
    },
  });

  const onSubmit = (data: Product) => {
    addProduct(data, {
      onSuccess: () => {
        toast("Record added", { type: "success" });
      },
    });
  };

  return (
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
      <UnitComboBox name="unitId" control={control} label="Units" />
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
  );
};
