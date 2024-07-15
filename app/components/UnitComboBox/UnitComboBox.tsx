"use client";

import { FieldPathByValue, FieldValues } from "react-hook-form";

import { ControlledCombobox, ControlledComboboxProps } from "@/app/components";
import { useFetchUnits, useMutateUnit } from "@/app/services";

import { getUnitOption, getUnitOptions } from "./UnitComboBox.utils";

type UnitComboBoxProps<
  FormFieldValues extends FieldValues,
  FormFieldName extends FieldPathByValue<FormFieldValues, string | undefined>,
> = Omit<
  ControlledComboboxProps<FormFieldValues, FormFieldName>,
  "options" | "onAddNew"
>;

export const UnitComboBox = <
  FormFieldValues extends FieldValues,
  FormFieldName extends FieldPathByValue<FormFieldValues, string | undefined>,
>(
  props: UnitComboBoxProps<FormFieldValues, FormFieldName>,
) => {
  const { data = [] } = useFetchUnits();
  const { mutate } = useMutateUnit();

  const options = getUnitOptions(data);

  const addUnit = (name: string) =>
    new Promise<SelectOption>((resolve, reject) => {
      mutate(name, {
        onSuccess: (unit) => {
          const newOption = getUnitOption(unit);
          resolve(newOption);
        },
      });
    });

  return <ControlledCombobox options={options} onAddNew={addUnit} {...props} />;
};
