import { SearchForm } from "@/components/froms/search-form";
import { TodoItem } from "@/components/todo-item";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <SearchForm />
            <div className="max-w-2xl w-full h-screen p-5 mt-8 ">
                <TodoItem />
            </div>
        </main>
    );
}
