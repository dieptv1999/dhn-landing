'use client'
import {useSearchParams} from "next/navigation";
import {Badge} from "@/components/ui/badge";

export default function ListTopic() {
    const searchParams = useSearchParams()

    const topic = searchParams.get('topic')

    const topics = [
        'Bán hàng',
        'Đóng hàng',
        'Hậu cần',
        'Tư vấn'
    ]

    const goto = (topic?: string) => {
        const params = new URLSearchParams(searchParams.toString())
        if (topic)
            params.set('topic', topic)
        else params.delete('topic')
        window.history.pushState(null, '', `?${params.toString()}`)
    }

    return (
        <div className={'flex flex-wrap gap-1 md:gap-2 my-2'}>
            <Badge
                variant="secondary"
                className={`px-1 md:px-3 md:py-1 cursor-pointer whitespace-nowrap hover:!bg-primary max-h-6 ${!topic ? 'bg-primary text-white' : ''}`}
                onClick={() => {
                    goto(undefined)
                }}
            >
                Tất cả
            </Badge>
            {topics.map(e => (
                <Badge
                    variant="secondary"
                    className={`px-1 md:px-3 md:py-1 cursor-pointer whitespace-nowrap hover:!bg-primary max-h-6 ${e === topic ? 'bg-primary text-white' : ''}`}
                    key={e}
                    onClick={() => {
                        goto(e)
                    }}
                >
                    {e}
                </Badge>
            ))}
        </div>
    )
}