import { ProjectCard } from "@/components/ProjectCard";
import { Hero } from "@/components/Hero";

export default function RootPage() {
    return (
        <main className="w-sceen overflow-hidden">
            <Hero />
            <div className="flex flex-wrap justify-evenly gap-3 overflow-hidden">
                {/* 
                <ProjectCard 
                    title="Project 1"
                    description="This is a project"
                    href="/1"
                />
                <ProjectCard 
                    title="Project 2"
                    description="This is another project"
                    href="/2"
                />
                <ProjectCard 
                    title="Project 3"
                    description="This is a third project"
                    href="/3"
                />
                */}
            </div>
        </main>
    );
}
