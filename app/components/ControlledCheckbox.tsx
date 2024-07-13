"use client";

import {
  Control,
  FieldPathByValue,
  FieldValues,
  PathValue,
  RegisterOptions,
  useController,
} from "react-hook-form";

import { InputCheckbox, InputCheckboxProps } from "@/app/components";

export type ControlledCheckboxProps<
  FormFieldValues extends FieldValues,
  FormFieldName extends FieldPathByValue<FormFieldValues, boolean | undefined>,
> = {
  name: FormFieldName;
  control: Control<FormFieldValues>;
  rules?: RegisterOptions<FormFieldValues, FormFieldName>;
  disabled?: boolean;
  value?: PathValue<FormFieldValues, FormFieldName>;
} & InputCheckboxProps;

export const ControlledCheckbox = <
  FormFieldValues extends FieldValues,
  FormFieldName extends FieldPathByValue<FormFieldValues, boolean | undefined>,
>({
  name,
  control,
  rules,
  disabled,
  value = false as PathValue<FormFieldValues, FormFieldName>,
  ...props
}: ControlledCheckboxProps<FormFieldValues, FormFieldName>) => {
  const {
    field: { ref, ...field },
  } = useController({
    name,
    control,
    rules,
    disabled,
    defaultValue: value,
  });

  return <InputCheckbox innerRef={ref} {...field} {...props} />;
};
