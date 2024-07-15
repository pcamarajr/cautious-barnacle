"use client";

import { FC, useState } from "react";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";

export type InputComboboxProps = {
  label: string;
  value?: string;
  innerRef?: (ref: HTMLInputElement) => void;
  onChange: (value: string) => void;
  onBlur: () => void;
  disabled?: boolean;
  /**
   * An optional async callback to display support for adding new items.
   * @param value
   */
  onAddNew?: (value: string) => Promise<SelectOption>;
  options: SelectOption[];
};

export const InputCombobox: FC<InputComboboxProps> = ({
  label,
  value,
  innerRef,
  onChange,
  onBlur,
  disabled,
  onAddNew,
  options,
}) => {
  const [query, setQuery] = useState("");

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) =>
          Object.values(option).some((value) =>
            value.toLowerCase().includes(query.toLowerCase()),
          ),
        );

  const handleChange = (selectedValue: string) => {
    const hasSelectedValue = options.some(
      (option) => option.value === selectedValue,
    );

    if (hasSelectedValue) {
      onChange(selectedValue);
      return;
    }

    if (!hasSelectedValue && onAddNew) {
      onAddNew(query).then((newOption) => {
        onChange(newOption.value);
        setQuery("");
      });
    }
  };

  return (
    <label>
      {label}
      <Combobox
        value={value}
        onChange={handleChange}
        onClose={() => setQuery("")}
        disabled={disabled}
      >
        <ComboboxInput
          aria-label={label}
          displayValue={(value: string) =>
            options.find((opt) => opt.value === value)?.label || value
          }
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          onBlur={onBlur}
          ref={innerRef}
        />
        <ComboboxButton>▼</ComboboxButton>
        <ComboboxOptions anchor="bottom">
          {filteredOptions.map((option) => (
            <ComboboxOption key={`cb_${option.value}`} value={option.value}>
              {option.label}
            </ComboboxOption>
          ))}
          {filteredOptions.length === 0 && onAddNew && (
            <ComboboxOption value={null}>
              {`Create "${query}" as a new item`}
            </ComboboxOption>
          )}
        </ComboboxOptions>
      </Combobox>
    </label>
  );
};
