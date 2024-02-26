import Link from "next/link";

export const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 fixed top-0 left-0 right-0">
            <h1 className="text-4xl font-bold">My portfolio</h1>
            <nav>
                <ul className="flex gap-6 max-w-xl flex-1 justify-between items-center">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About me</a>
                    </li>
                    <li>
                        <Link target="_blank" href={"https://www.linkedin.com/in/jannieslothhansen/"}>
                            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px]">
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                    Get in contact
                                </span>
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
            
        </header>
    );
}