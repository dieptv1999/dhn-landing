import Image from "next/image";
import {formatCreatedDate} from "@/lib/utils";
import Link from "next/link";

export default function ArticleCard({article, key}: { article: any, key: string }) {

    const getTagsFirst = (tags: string[] | undefined) => {
        if (!tags) return '';

        return tags[0]
    }

    return (
        <Link href={`/baiviet/${article.slug}`} className={'flex gap-4 cursor-pointer w-full'}>
            <div className={'relative w-1/3 md:w-[250px] aspect-video rounded md:rounded-lg overflow-hidden shadow'}>
                <Image
                    placeholder={'blur'}
                    blurDataURL={'/blur.jpeg'}
                    src={article.banner}
                    alt={article.title}
                    fill
                    sizes={'sizes="(max-width: 500px) 100vw, (max-width: 768px) 300px, 200px"'}
                    className={'object-cover aspect-video'}
                />
                {getTagsFirst(article.tags) ? <div className={'absolute top-2 left-0 bg-[#505050] text-white text-xs px-2 py-1 rounded-r'}>{getTagsFirst(article.tags)}</div> : null}
            </div>
            <div className={'flex-1 flex flex-col gap-3'}>
                <div className={'text-gray-700/80 text-sm'}>{formatCreatedDate(article.createdAt)}</div>
                <div className={'font-semibold text-sm md:text-lg hover:opacity-50'}>{article.title}</div>
                <div className={'text-sm text-gray-900'}>{article.subTitle}</div>
            </div>
        </Link>
    )
}