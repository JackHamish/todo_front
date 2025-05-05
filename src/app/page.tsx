
import Link from "next/link";
import { Icon } from "@/components/icon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="font-sans text-6xl font-semibold mb-6">
          Organize Your Life with <span className="text-heliotrope">TODO List</span>
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          A simple and efficient way to manage your tasks. Stay organized, focused, and get things done.
        </p>
        <Link
          href="/create"
          className="flex items-center justify-center gap-2 bg-heliotrope text-black rounded-full px-8 py-4 text-xl font-semibold hover:opacity-90 transition w-fit mx-auto"
          scroll={false}
        >
          <Icon icon="icon-plus" />
          Start Adding Tasks
        </Link>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="text-center p-6 bg-friar-gray rounded-2xl">
          <Icon icon="icon-plus text-4xl mb-4 text-heliotrope" />
          <h3 className="font-sans text-xl font-semibold mb-2">Easy Task Creation</h3>
          <p>Quickly add and organize your tasks with just a few clicks</p>
        </div>
        <div className="text-center p-6 bg-friar-gray rounded-2xl">
          <Icon icon="icon-bin text-4xl mb-4 text-heliotrope" />
          <h3 className="font-sans text-xl font-semibold mb-2">Simple Management</h3>
          <p>Effortlessly manage and track your tasks progress</p>
        </div>
        <div className="text-center p-6 bg-friar-gray rounded-2xl">
          <Icon icon="icon-plus text-4xl mb-4 text-heliotrope" />
          <h3 className="font-sans text-xl font-semibold mb-2">Priority Setting</h3>
          <p>Set task priorities to focus on what matters most</p>
        </div>
      </section>
    </main>
  );
}
