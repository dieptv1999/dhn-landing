import {Navbar} from "@/components/layout/navbar";
import React from "react";
import {getTranslation} from "@/lib/i18n/getTranslation";
import {Locale} from "@/i18n";
import FeaturedNews from "@/components/news/featured-news";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import get from 'lodash.get'
import ListNews from "@/components/news/list-news";
import {FooterSection} from "@/components/layout/sections/footer";

export const runtime = "edge";

type Props = {
    params: {
        lang: Locale;
    };
};

async function getData() {
    const resNewFeatured = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/article/featured`, {
        next: {
            revalidate: 240,
        }
    })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!resNewFeatured.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return {
        featuredNews: await resNewFeatured.json()
    }
}

export default async function BaivietPage({params: {lang}}: Props) {
    const translation = await getTranslation(lang);
    const {featuredNews} = await getData()

    return (
        <>
            <Navbar
                featureLabel={translation('nav.feature')}
                localSelectorLabel={translation('nav.localeSelector.message')}
                contactLabel={translation('nav.contact')}
            />
            <div className={'w-full flex justify-center mt-12'}>
                <div className={'max-w-screen-md w-full px-3'}>
                    <Breadcrumb className={'max-w-screen-xl mx-2 w-full'}>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <Link href={'/'}>
                                    Trang chủ
                                </Link>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator/>
                            <BreadcrumbItem>
                                <BreadcrumbPage>
                                    Bài viết
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <Separator className={'my-2'}/>
                    <div className={'text-xl md:text-2xl xl:text-3xl mb-3 md:mb-8 font-semibold'}>Bài viết mới nhất</div>
                    <FeaturedNews news={get(featuredNews, 0)}/>
                    <ListNews />
                </div>
            </div>
            <FooterSection lang={lang}/>
        </>
    )
}