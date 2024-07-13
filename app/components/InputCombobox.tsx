"use client";

import { FC, useState } from "react";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";

type Option = {
  label: string;
  value: string;
};

export type InputComboboxProps = {
  label: string;
  value?: string;
  innerRef?: (ref: HTMLInputElement) => void;
  onChange: (value: Option) => void;
  onBlur: () => void;
  disabled?: boolean;
  /**
   * An optional async callback to display support for adding new items.
   * @param value
   */
  onAddNew?: (value: string) => Promise<Option | undefined>;
  options: Option[];
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
    const option = options.find((option) => option.value === selectedValue);

    if (option) {
      onChange(option);
      return;
    }

    onAddNew?.(query).then((newOption) => {
      if (!newOption) {
        return;
      }

      onChange(newOption);
      options.push(newOption);
    });
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
          displayValue={(option) => (option as Option)?.label}
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
