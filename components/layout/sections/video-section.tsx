'use client'
import React from "react";

export default function VideoSection() {
    return (
        <div className={'w-full flex justify-center'}>
            <div className={'max-w-screen-lg w-full aspect-video min-h-[200px] md:min-h-[500px]'}>
                <iframe
                    width="100%"
                    height="100%"
                    className={'aspect-video'}
                    src="https://www.youtube.com/embed/-vJxa4iBNK0"
                    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    )
}