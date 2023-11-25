"use client";
import { useTodos } from "@/domains/todo/hooks";
import { TodoItem } from "../todo-item";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TodoQueryParams } from "@/domains/todo";

const TodoList = () => {
    const searchParams = useSearchParams();

    const queryParams: TodoQueryParams = Object.fromEntries(searchParams.entries());

    if (queryParams.status === "all") {
        delete queryParams.status;
    }

    const { data: todos } = useTodos(queryParams);

    return (
        <div className="max-w-2xl w-full h-screen p-5 mt-5 gap-6 flex flex-col">
            {todos && todos.map((todo) => <TodoItem key={todo.id} {...todo} />)}
        </div>
    );
};

export default TodoList;
