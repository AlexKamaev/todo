export interface ITodoPreview {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface ITodoPreviewListProps {
    todos: ITodoPreview[],
    searchText?: string,
}

export interface ITodoPreviewListState {
    todos: ITodoPreview[],
    searchText: string,
}

export interface ITodoPreviewProps {
    todo: ITodoPreview,
    searchText: string | undefined,
}

export interface IFilterProps {
    onFilterChanged: (searchText: string, completed: boolean | undefined) => void;
}