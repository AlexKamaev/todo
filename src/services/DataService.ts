import { ITodoPreview, IUser } from "@/types";

const BASE_URL = `https://jsonplaceholder.typicode.com`;
const TODOS_URL = `${BASE_URL}/todos`;
const DEFAULT_TODOS_LIMIT = 15;
const USERS_URL = `${BASE_URL}/users`;


export class DataService {
    private static GetTodosUrl(limit: number, completed?: boolean): string {
        const url = new URL(TODOS_URL);

        if (limit) {
            url.searchParams.set("_limit", limit.toString());
        }

        if (completed !== undefined) {
            url.searchParams.set("completed", completed.toString());
        }

        return url.toString();
    }

    public static GetTodoUrl(id: number): string {
        return `${TODOS_URL}/${id}`;
    }

    public static GetUserUrl(id: number): string {
        return `${USERS_URL}/${id}`;
    }


    public static async GetTodos(completed?: boolean, limit: number = DEFAULT_TODOS_LIMIT): Promise<ITodoPreview[]> {
        const url = DataService.GetTodosUrl(limit, completed);

        const data = await fetch(url);

        return data.json();
    }

    public static async GetTodo(id: number): Promise<ITodoPreview> {
        const url = DataService.GetTodoUrl(id);

        const data = await fetch(url);

        return data.json();
    }

    public static async GetUser(id: number): Promise<IUser> {
        const url = this.GetUserUrl(id);

        const data = await fetch(url);

        return data.json();
    }
}