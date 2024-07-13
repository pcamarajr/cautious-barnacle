"use client";

import {
  Control,
  FieldPathByValue,
  FieldValues,
  PathValue,
  RegisterOptions,
  useController,
} from "react-hook-form";

import { InputCombobox, InputComboboxProps } from "@/app/components";

export type ControlledComboboxProps<
  FormFieldValues extends FieldValues,
  FormFieldName extends FieldPathByValue<FormFieldValues, string | undefined>,
> = {
  name: FormFieldName;
  control: Control<FormFieldValues>;
  rules?: RegisterOptions<FormFieldValues, FormFieldName>;
  disabled?: boolean;
  value?: PathValue<FormFieldValues, FormFieldName>;
} & Omit<
  InputComboboxProps,
  "onChange" | "onBlur" | "value" | "disabled" | "innerRef"
>;

export const ControlledCombobox = <
  FormFieldValues extends FieldValues,
  FormFieldName extends FieldPathByValue<FormFieldValues, string | undefined>,
>({
  name,
  control,
  rules,
  disabled,
  value = false as PathValue<FormFieldValues, FormFieldName>,
  ...props
}: ControlledComboboxProps<FormFieldValues, FormFieldName>) => {
  const {
    field: { ref, ...field },
  } = useController({
    name,
    control,
    rules,
    disabled,
    defaultValue: value,
  });

  return <InputCombobox innerRef={ref} {...field} {...props} />;
};
