import { ISearchBoxProps } from '@/types';

export function SearchBox({
  searchText,
  onSearchTextChanged,
}: ISearchBoxProps) {
  return (
    <>
      <input
        className="alx-input"
        type="text"
        placeholder="Find a task..."
        value={searchText}
        onInput={onSearchTextChanged}
      />
      <span className="alx-icon alx-is-small alx-is-right">
        <i className="fas fa-magnifying-glass"></i>
      </span>
    </>
  );
}
