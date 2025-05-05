import Link from "next/link";
import { Icon } from "../icon";

export const Header = () => {
  return (
    <header className="w-full">
      <div className="flex mx-auto w-full items-center justify-between px-12 py-5 container">
        <div className="flex items-center gap-8">
          <Link href="/">
            <h1 className="font-sans text-4xl font-semibold border-2 border-heliotrope rounded-2xl px-7 py-4">
              TODO List
            </h1>
          </Link>
          <Link href="/tasks" className="font-sans text-xl hover:text-heliotrope transition">
            My Tasks
          </Link>
        </div>
        <Link
          href="/create"
          className="flex items-center justify-between rounded-3xl border-2 border-heliotrope px-7 py-4 gap-3 transition duration-500 hover:scale-95"
          scroll={false}
        >
          <Icon icon="icon-plus text-xl" />
          <span className="font-sans text-xl">Add task</span>
        </Link>
      </div>
    </header>
  );
};
