import Image from "next/image";
import React from "react";
import { client } from "@/utils/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { EntryFieldTypes } from "contentful";

type FrontPage = {
    preHeadline: EntryFieldTypes.Text;
    headline: EntryFieldTypes.Text;
    subHeadline: EntryFieldTypes.RichText;
};

type FrontPageSkeleton = {
    contentTypeId: "frontPage";
    fields: FrontPage;
};

export const Hero = async () => {
    const res = await client.getEntry<FrontPageSkeleton>(
        "4CgqhDFRpOOuzOpvzgEQjt",
    );

    return (
        <div className="flex min-h-screen flex-col items-center gap-10 sm:flex-row md:justify-between md:gap-16">
            <div className="flex flex-col gap-3">
                <div className="opacity-85">{res.fields.preHeadline}</div>
                <h1 className="text-3xl font-bold lg:text-5xl">
                    {res.fields.headline}
                </h1>
                <div className="md:text-xl">
                    {documentToReactComponents(res.fields.subHeadline)}
                </div>
            </div>
            <div className="relative aspect-square w-3/4 shrink-0 sm:w-[33%]">
                <Image alt="" fill src={"/pb.jpg"} className="rounded-full" />
            </div>
        </div>
    );
};
