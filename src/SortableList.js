import React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

// Define a single sortable item
const SortableItem = SortableElement(({ value }) => (
  <li>{value}</li>
));

// Define a sortable container
const SortableList = SortableContainer(({ items }) => (
  <ul>
    {items.map((value, index) => (
      <SortableItem key={`item-${index}`} index={index} value={value} />
    ))}
  </ul>
));

export default SortableList;
