'use client'
import {MDXRemote} from "next-mdx-remote";
import {components} from "@/components/mdx/index";

export default function MdxContainer({source}: { source: any }) {
  return (
    <div className={'prose-sm md:prose my-3'}>
      <MDXRemote {...source} components={components}/>
    </div>
  )
}