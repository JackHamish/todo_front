import { SearchForm } from "@/components/froms/search-form";
import TodoList from "@/components/todo-list";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <SearchForm />
            <TodoList />
        </main>
    );
}
