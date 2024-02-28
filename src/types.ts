import { EntryFieldTypes } from "contentful";

type Global = {
    title: EntryFieldTypes.Text;
    navigationHeadline: EntryFieldTypes.Text;
    linkedInLink: EntryFieldTypes.Text;
};

export type GlobalSkeleton = {
    contentTypeId: "frontPage";
    fields: Global;
};

type FrontPage = {
    preHeadline: EntryFieldTypes.Text;
    headline: EntryFieldTypes.Text;
    subHeadline: EntryFieldTypes.RichText;
};

export type FrontPageSkeleton = {
    contentTypeId: "frontPage";
    fields: FrontPage;
};
