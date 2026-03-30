import { ISortButtonProps, SortType } from '@/types';

function getSortingIcon(sorting: SortType) {
  switch (sorting) {
    case 'desc':
      return 'fa-arrow-down-z-a';
    default:
      return 'fa-arrow-down-a-z';
  }
}

export function SortButton({ sorting, onSortingChanged }: ISortButtonProps) {
  function changeSorting(): void {
    let newSorting: SortType = 'none';

    if (sorting === 'none') {
      newSorting = 'asc';
    } else if (sorting === 'asc') {
      newSorting = 'desc';
    } else if (sorting === 'desc') {
      newSorting = 'none';
    }

    onSortingChanged(newSorting);
  }

  return (
    <button
      className={`alx-button ${sorting !== 'none' ? 'alx-is-active' : ''}`}
      onClick={changeSorting}>
      <span className="alx-icon-text">
        <span className="alx-icon">
          <i className={`fas ${getSortingIcon(sorting)}`}></i>
        </span>
      </span>
    </button>
  );
}
