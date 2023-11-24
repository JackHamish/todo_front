import Link from "next/link";

export const Header = () => {
    return (
        <header className="flex w-full items-center justify-between px-12 py-5">
            <Link href="/">
                <h1 className="font-sans text-4xl font-semibold">TODO List</h1>
            </Link>
        </header>
    );
};
