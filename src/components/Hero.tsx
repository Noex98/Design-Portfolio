import Image from 'next/image'
import React from 'react'
import { client } from "@/utils/contentful"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { EntryFieldTypes } from 'contentful';

type FrontPage = {
  preHeadline: EntryFieldTypes.Text;
  headline: EntryFieldTypes.Text;
  subHeadline: EntryFieldTypes.RichText;
}

type FrontPageSkeleton = {
  contentTypeId: 'frontPage';
  fields: FrontPage;
}

export const Hero = async () => {

  const res = await client.getEntry<FrontPageSkeleton>('4CgqhDFRpOOuzOpvzgEQjt');

  return (
    <div className='h-screen flex items-center justify-center md:justify-between gap-16 flex-col md:flex-row'>
      <div className='flex flex-col gap-3'>
        <div className='opacity-85'>
          {res.fields.preHeadline}
        </div>
        <h1 className='text-5xl font-bold'>{res.fields.headline }</h1>
        <div className='text-2xl'>
          {documentToReactComponents(res.fields.subHeadline)}
        </div>
      </div>
      <div className='relative w-3/4 md:w-[33%] aspect-square shrink-0'>
        <Image alt='' fill src={"/pb.jpg"} className="rounded-full"/>
      </div>
    </div>  
  )
}
