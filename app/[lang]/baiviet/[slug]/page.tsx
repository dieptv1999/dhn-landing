import {Metadata, ResolvingMetadata} from "next";
import {serialize} from "next-mdx-remote/serialize";
import MdxContainer from "@/components/mdx/MdxContainer";
import Image from "next/image";
import withSlugs from "rehype-slug"
import {BASE_URL} from "@/api/base-repository";
import {notFound} from "next/navigation";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import * as React from "react";
import {Separator} from "@/components/ui/separator";
import {Navbar} from "@/components/layout/navbar";
import {getTranslation} from "@/lib/i18n/getTranslation";
import {Locale} from "@/i18n";
import {FooterSection} from "@/components/layout/sections/footer";

export const runtime = "edge";

type Props = {
    params: { slug: string, lang: Locale }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    {params, searchParams}: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const slug = params.slug

    // fetch data
    const article: any = await fetch(`${BASE_URL}/article/${slug}`, {
        next: {
            revalidate: 2400,
        }
    }).then((res) => res.json())

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: article.title,
        description: article.subTitle,
        robots: 'index,follow',
        keywords: article.tags?.join(','),
        authors: {
            name: 'homeei.com',
            url: 'https://homeei.com'
        },
        generator: 'CÔNG TY CỔ PHẦN HOMELAND',
        referrer: "no-referrer-when-downgrade",
        openGraph: {
            images: [article.banner, ...previousImages],
            type: 'article',
            siteName: 'Homeei',
            description: article.subTitle,
        },
        alternates: {
            canonical: `https://donghangnhanh.vn/baiviet/${article.slug}`,
            languages: {
                'en': `https://donghangnhanh.vn/en/baiviet/${article.slug}`,
                'vi': `https://donghangnhanh.vn/vi/baiviet/${article.slug}`,
            },
        },
        category: 'batdongsan',
    }
}

async function getData(slug: string) {
    const res = await fetch(`${BASE_URL}/article/${slug}`, {
        next: {
            revalidate: 360,
        }
    })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        return notFound()
    }

    const article: any = await res.json()

    if (!article) {
        return notFound()
    }
    const source = article.content
    const mdxSource = await serialize(source, {
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [
                withSlugs,
            ],
        }
    })
    return {
        ...article,
        source: mdxSource
    }
}

export default async function ArticlePage({params: {lang, slug}}: Props) {
    const {source, banner, user, createdAt, vote, id, title, subTitle}: any = await getData(slug)
    const translation = await getTranslation(lang);

    return (
        <>
            <Navbar
                featureLabel={translation('nav.feature')}
                localSelectorLabel={translation('nav.localeSelector.message')}
                contactLabel={translation('nav.contact')}
            />
            <div className={'w-full flex justify-center mt-12'}>
                <div className={'max-w-screen-md w-full'}>
                    <Breadcrumb className={'max-w-screen-lg mx-2 w-full'}>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <Link href={'/'}>
                                    Trang chủ
                                </Link>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator/>
                            <BreadcrumbItem>
                                <Link href={'/baiviet'}>
                                    Tin tức
                                </Link>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator/>
                            <BreadcrumbItem>
                                <BreadcrumbPage className={'truncate max-w-[140px] md:max-w-[550px]'}>
                                    {title}
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <Separator className={'my-2'}/>
                    <div className={'max-w-screen-lg px-3 w-full mt-6'}>
                        <div className={'w-full aspect-[10/3] rounded-lg relative mb-3 md:mb-6'}>
                            <Image src={banner ?? '/thumb-1000010381.gif'} alt={'banner'} fill
                                   className={'object-cover'}/>
                        </div>
                        <div className={'flex flex-col md:flex-row gap-4 md:gap-6'}>
                            <div className={'flex flex-col'}>
                                <div className={'md:text-2xl lg:text-4xl mb-3 font-bold'}>{title}</div>
                                <div className={'flex gap-8'}>
                                    <div className={'flex-1 flex flex-col'}>
                                        <div className={'font-semibold py-4 max-w-[65ch]'}>{subTitle}</div>
                                        <MdxContainer source={source}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSection lang={lang}/>
        </>
    )
}
