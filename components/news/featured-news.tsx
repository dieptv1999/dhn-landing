import Image from "next/image";
import {Separator} from "@/components/ui/separator";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Link from "next/link";
import {formatCreatedDate} from "@/lib/utils";

export default async function FeaturedNews({news}: { news: any }) {
    if (!news) return null;
    return (
        <Link href={`/baiviet/${news.slug}`}
              className={'max-w-screen-xl w-full flex flex-col relative rounded-lg overflow-hidden'}>
            <div className={'w-full aspect-[10/6] md:aspect-[10/3] relative shadow'}>
                <Image
                    src={news.banner}
                    alt={news.title}
                    fill
                    quality={100}
                    sizes={'sizes="(max-width: 768px) 100vw, (max-width: 1024px) 1380px, 400px"'}
                    className={'object-cover'}
                />
            </div>

            <div
                className={'absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black/40 via-transparent flex flex-col justify-between p-2 md:p-4'}>
                <div>

                </div>
                <div className={'flex flex-col text-white'}>
                    <div className={'text-xl md:text-2xl font-semibold'}>{news.title}</div>
                    <div className={'flex gap-2 items-center'}>
                        <div>{formatCreatedDate(news.createdAt)}</div>
                        <Separator orientation={'vertical'}/>
                        {news.user
                            ? <div className={'inline-flex gap-2 items-center'}>
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src={news.user?.profilePicture ?? ''} alt={'avatar'}/>
                                    <AvatarFallback>SN</AvatarFallback>
                                </Avatar>
                                <span>{news.user?.firstName ? [news.user?.firstName, news.user?.lastName].join(' ') : ''}</span>
                            </div>
                            : null}
                    </div>
                </div>
            </div>
        </Link>
    )
}