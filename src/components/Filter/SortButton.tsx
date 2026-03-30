import { ISearchBoxProps, ISortButtonProps, SortType } from '@/types';

function getSortingIcon(sorting: SortType) {
  switch (sorting) {
    case 'desc':
      return 'fa-arrow-down-z-a';
    default:
      return 'fa-arrow-down-a-z';
  }
}

export function SortButton({ sorting, onSortingChanged }: ISortButtonProps) {
  return (
    <button
      className={`alx-button ${sorting !== 'none' ? 'alx-is-active' : ''}`}
      onClick={onSortingChanged}>
      <span className="alx-icon-text">
        <span className="alx-icon">
          <i className={`fas ${getSortingIcon(sorting)}`}></i>
        </span>
      </span>
    </button>
  );
}
