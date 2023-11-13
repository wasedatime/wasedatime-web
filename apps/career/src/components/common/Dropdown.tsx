import React from "react"

type DropdownProps = {
  name: string
  value: string | string[]
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  options: Array<{ label: string; value: string | number }>
  placeholder: string
  multiple?: boolean
  styles?: string
}

const Dropdown: React.FC<DropdownProps> = ({
  name,
  value,
  handleChange,
  options,
  placeholder,
  styles = "w-full",
  multiple = false,
}) => {
  const handleMultipleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    )
    handleChange({ target: { name: e.target.name, value: selectedOptions } })
  }
  const formatValueForDisplay = (selectedValues: any | "") => {
    return Array.isArray(selectedValues)
      ? selectedValues.join(", ")
      : selectedValues
  }
  return (
    <select
      name={name}
      value={multiple ? value : formatValueForDisplay(value)}
      onChange={multiple ? handleMultipleChange : handleChange}
      multiple={multiple}
      className={`${styles} standard-style rounded border p-2`}
    >
      {!multiple && <option value="">{placeholder}</option>}
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Dropdown
