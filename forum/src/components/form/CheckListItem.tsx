import React from "react";

type Props = {
  text: string;
  isChecked?: boolean;
  itemId?: string;
}

const CheckListItem = ({ text, isChecked, itemId }: Props) => (
  <li key={`checkbox-item-${itemId}`}>
    <div className="flex items-center px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
      <input id={`checkbox-item-${itemId}`} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
      <label htmlFor={`checkbox-item-${itemId}`} className="py-2 ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">{text}</label>
    </div>
  </li>
);

export default CheckListItem;