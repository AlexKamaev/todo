import { ISearchBoxProps } from '@/types';
import { debounce } from '@/utils/debounce';

export function SearchBox({
    searchText,
    onSearchTextChanged,
}: ISearchBoxProps) {
    const debouncedOnSearchTextChanged = debounce(onSearchTextChanged);

    function onSearchTextInput(e: React.InputEvent<HTMLInputElement>): void {
        const newSearchText = e.currentTarget.value;

        debouncedOnSearchTextChanged(newSearchText);
    }

    return (
        <>
            <input
                data-testid="search-input"
                className="alx-input"
                type="text"
                placeholder="Find a task..."
                defaultValue={searchText}
                onInput={onSearchTextInput}
            />
            <span className="alx-icon alx-is-small alx-is-right">
                <i className="fas fa-magnifying-glass"></i>
            </span>
        </>
    );
}
