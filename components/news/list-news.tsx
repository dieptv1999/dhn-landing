'use client'
import React, {useEffect, useState} from "react";
import axios, {AxiosResponse, HttpStatusCode} from "axios";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import ArticleSkeleton from "@/components/news/article-skeleton";
import ArticleCard from "@/components/news/article.card";
import {useToast} from "@/hooks/use-toast";
import ListTopic from "@/components/news/list-topic";
import ListNotfound from "@/components/list-notfound";
import CustomPagination from "@/components/pagination";
import {RepositoryFactory} from "@/api/repository-factory";
import throttle from "lodash.throttle";

const ArticleRepository = RepositoryFactory.get('article')

export default function ListNews() {
    const [news, setNews] = useState<any[]>([])
    const [loading, setLoading] = useState(false)
    const [total, setTotal] = useState<number>(0)
    const searchParams = useSearchParams()
    const [filter, setFilter] = useState<{
        page: number;
        limit: number;
        topic?: string;
    }>({
        page: 0,
        limit: 10
    })
    const {toast} = useToast()
    const pathname = usePathname();
    const router = useRouter();

    const fetchData = throttle((filter: any) => {
        try {
            setLoading(true)
            ArticleRepository.search({
                page: filter.page,
                limit: filter.limit,
                topic: filter.topic,
                type: 'tintuc'
            }).then((resp: AxiosResponse) => {
                if (resp.status === HttpStatusCode.Ok) {
                    setNews(resp.data.data)
                    setTotal(resp.data.total)
                } else setNews([])
            })
        } catch (e) {
            setNews([])
            if (axios.isAxiosError(e) && e.response) {
                if (e.response.status >= 400 && e.response?.status < 500) {
                    toast({
                        variant: 'destructive',
                        title: e.message
                    })
                } else {
                    toast({
                        variant: 'destructive',
                        title: 'Có lỗi xảy ra khi tìm kiếm bài đăng'
                    })
                }
            }
        } finally {
            setLoading(false)
        }
    }, 200)

    const onPageChange = (p: number) => {
        const params = new URLSearchParams(searchParams);
        setFilter({
            ...filter,
            page: p,
        })
        // @ts-ignore
        params.set('page', p);
        router.push(`${pathname}?${params.toString()}`);
    }

    useEffect(() => {
        let params: any = {
            limit: searchParams.get('limit') ? parseInt(searchParams.get('limit') ?? '0') : 10,
            page: searchParams.get('page') ? parseInt(searchParams.get('page') ?? '0') : 0,
            topic: searchParams.get('topic'),
        }

        setFilter(params)
        fetchData(params)
    }, [searchParams]);

    return (
        <div className={'max-w-screen-xl w-full my-3 md:my-8 flex flex-col md:flex-row gap-6'}>
            <div className={'grid grid-cols-1 gap-4 flex-1'}>
                <ListTopic />
                {loading ?
                    <ArticleSkeleton/>
                    : news.length > 0
                        ? news.map(e => (
                            <ArticleCard key={e.id} article={e}/>
                        ))
                        : <ListNotfound/>}
                <CustomPagination total={total} page={filter.page}
                                  pageSize={filter.limit} onChange={onPageChange}/>
            </div>
        </div>
    )
}
