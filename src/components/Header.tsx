import Link from "next/link";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "./Drawer";
import { CiMenuBurger } from "react-icons/ci";
import { client } from "@/utils/contentful";
import { GlobalSkeleton } from "@/types";
import { cn } from "@/utils/cn";

export const Header = async ({ className }: { className?: string }) => {
    const { fields } = await client.getEntry<GlobalSkeleton>(
        "6lkt1semYwHrnDwiZXjVrq",
    );

    return (
        <>
            <header
                className={cn(
                    "left-6 right-6 top-0 flex items-center justify-between py-4",
                    className,
                )}
            >
                <Link href="/">
                    <h1 className="text-4xl font-bold">
                        {fields.navigationHeadline}
                    </h1>
                </Link>

                <nav className="hidden md:block">
                    <ul className="flex max-w-xl flex-1 items-center justify-between gap-6">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About me</a>
                        </li>
                        <li>
                            <Link target="_blank" href={fields.linkedInLink}>
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
                <div className="md:hidden">
                    <Drawer>
                        <DrawerTrigger>
                            <div className="flex h-11 w-11 items-center justify-center">
                                <CiMenuBurger fontSize={24} />
                            </div>
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerTitle className="p-4 text-center text-3xl">
                                Menu
                            </DrawerTitle>
                            <ul className="flex flex-col items-end px-4 text-lg">
                                <li>
                                    <a className="py-4" href="/">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a className="py-4" href="/about">
                                        About me
                                    </a>
                                </li>
                                <li className="py-4">
                                    <Link
                                        target="_blank"
                                        href={fields.linkedInLink}
                                    >
                                        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px]">
                                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                                Get in contact
                                            </span>
                                        </button>
                                    </Link>
                                </li>
                            </ul>
                        </DrawerContent>
                    </Drawer>
                </div>
            </header>
        </>
    );
};
