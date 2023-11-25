import { SearchForm } from "@/components/froms/search-form";
import TaskList from "@/components/task-list";

export default function Home() {
    return (
        <main className="flex   h-full flex-col items-center justify-between py-24 px-12">
            <SearchForm />
            <TaskList />
        </main>
    );
}
