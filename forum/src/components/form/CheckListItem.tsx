import React from "react";

type Props = {
  text: string;
  value: string | number;
  onToggle?: (value: string | number) => void;
  isChecked?: boolean;
  itemId?: string;
}

const CheckListItem = ({ text, value, onToggle, isChecked, itemId }: Props) => {
  const handleItemClicked = (e) => {
    e.preventDefault();
    onToggle && onToggle(value);
  }

  return (
    <li key={`checkbox-item-${itemId}`}>
      <div className="checkbox-wrapper" onClick={handleItemClicked}>
        <input id={`checkbox-item-${itemId}`} type="checkbox" value="" className="checkbox-input" checked={isChecked} />
        <label htmlFor={`checkbox-item-${itemId}`} className="checkbox-label">{text}</label>
      </div>
    </li>
  );
};

export default CheckListItem;