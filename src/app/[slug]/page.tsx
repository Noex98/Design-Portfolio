import { ProjectCanvas } from "@/components/ProjectCanvas";
import { useGLTF } from "@react-three/drei";
import { client } from "@/utils/contentful";
import { notFound } from "next/navigation";
import { ProjectSkeleton } from "@/types";
import { Header } from "@/components/Header";

export default async function Project({
    params,
}: {
    params: { slug: string };
}) {
    const { items } = await client.getEntries<ProjectSkeleton>({
        content_type: "project",
    });

    const project = items.find((item) => item.fields.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <>
            <Header />
            <div className="md:h-screen">
                <h1>Project {project.fields.title}</h1>
                <ProjectCanvas assetUrl={project.fields.assetUrl} />
            </div>
        </>
    );
}
