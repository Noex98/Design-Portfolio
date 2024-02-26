export default function Project({
    params
}: {
    params: { projectId: string }
}){
    return (
        <div>
            <h1>Project {params.projectId}</h1>
        </div>
    )
}