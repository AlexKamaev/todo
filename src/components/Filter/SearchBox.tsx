import { ISearchBoxProps } from '@/types';

export function SearchBox({
  searchText,
  onSearchTextChanged,
}: ISearchBoxProps) {
  return (
    <input
      className="alx-input"
      type="text"
      placeholder="Find a task..."
      value={searchText}
      onInput={onSearchTextChanged}
    />
  );
}
