import { ITodoPreview } from "@/types";

const BASE_URL = `https://jsonplaceholder.typicode.com`;
const TODOS_URL = `${BASE_URL}/todos`;
const DEFAULT_LIMIT = 15;

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


    public static async GetTodos(limit: number = DEFAULT_LIMIT, completed?: boolean): Promise<ITodoPreview[]> {
        const url = DataService.GetTodosUrl(limit, completed);

        const data = await fetch(url);

        return data.json();
    }
}