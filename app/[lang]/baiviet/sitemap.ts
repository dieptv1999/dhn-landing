import type {MetadataRoute} from 'next'
import {BASE_URL} from "@/api/base-repository";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Google's limit is 50,000 URLs per sitemap
    const articles = await fetch(BASE_URL + '/article/sitemap').then((res) => res.json())

    return articles.map((article: {
        id: string;
        slug: string;
        updated_at: Date;
    }) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/baiviet/${article.slug}`,
        lastModified: article.updated_at,
    }))
}