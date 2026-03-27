export interface IUser {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export interface ITodoPreview {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface ITodoPreviewListProps {
    todos: ITodoPreview[],
}

export interface IClientTodoPreviewListProps extends ITodoPreviewListProps {
    searchText?: string,
    onTodoClick: (id: number) => void,
}

export interface ITodoPreviewListState {
    todos: ITodoPreview[],
    searchText: string,
}

export interface ITodoPreviewProps {
    todo: ITodoPreview,
    searchText: string | undefined,
    onClick: (id: number) => void,
}

export interface ITodoDetailPageProps {
    params: Promise<{ id: number }>
}

export interface IFilterProps {
    onFilterChanged: (searchText: string, completed: boolean | undefined) => void;
}