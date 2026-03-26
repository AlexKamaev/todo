export interface ITodoPreview {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface ITodoPreviewListProps {
    todos: ITodoPreview[]
}

export interface ITodoPreviewProps {
    todo: ITodoPreview
}