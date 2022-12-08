import React from "react";
import CheckListItem from "@app/components/form/CheckListItem";

type Props = {
  title: string;
  items: string[];
  onListItemToggle?: (value: string | number) => void;
  isItemChecked?: (value: string | number) => boolean;
  listId?: string;
}

const CheckList = ({ title, items, onListItemToggle, isItemChecked, listId }: Props) => (
  <div className="my-2 mx-auto" key={"list-" + listId}>
    <h1 className="form-item-title">{title}</h1>
    <div className="w-full bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
      <ul className="text-sm text-gray-700 dark:text-gray-200">
      {
        items.map((item, itemId) => (
          <CheckListItem
            key={`${listId}-${itemId}`}
            itemId={`${listId}-${itemId}`}
            text={item}
            value={item}
            onToggle={onListItemToggle}
            isChecked={isItemChecked(item)}
          />
        ))
      }
      </ul>
    </div>
  </div>
);

export default CheckList;