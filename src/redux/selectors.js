import { useMemo } from "react";
import { useSelector } from "react-redux";

export const selectContacts = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = (state) => {
  const items = selectContacts(state);
  const filterName = selectNameFilter(state);
  return items.filter((item) =>
    item.name.toLowerCase().includes(filterName.toLowerCase())
  );
};
