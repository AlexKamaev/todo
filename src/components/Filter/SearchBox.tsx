import { ISearchBoxProps } from '@/types';

export function SearchBox({
  searchText,
  onSearchTextChanged,
}: ISearchBoxProps) {
  function onSearchTextInput(e: React.InputEvent<HTMLInputElement>): void {
    const newSearchText = e.currentTarget.value;

    onSearchTextChanged(newSearchText);
  }

  return (
    <>
      <input
        className="alx-input"
        type="text"
        placeholder="Find a task..."
        value={searchText}
        onInput={onSearchTextInput}
      />
      <span className="alx-icon alx-is-small alx-is-right">
        <i className="fas fa-magnifying-glass"></i>
      </span>
    </>
  );
}
