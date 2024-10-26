'use client'
import React from 'react'
import {Skeleton} from "@/components/ui/skeleton";

export default function ArticleSkeleton() {
    return (
        <React.Fragment>
            {Array.from(Array(4).keys()).map(e => (
                <div key={e} className="flex flex-col w-full space-y-3">
                    <Skeleton className="h-[125px] w-full rounded-xl bg-[#18181b]/10"/>
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full bg-[#18181b]/10"/>
                        <Skeleton className="h-4 w-full bg-[#18181b]/10"/>
                    </div>
                </div>
            ))}
        </React.Fragment>
    )
}