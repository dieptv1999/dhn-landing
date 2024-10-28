import React from "react";
import Image from "next/image";
import {Loader2} from "lucide-react";

export default function PageLoading() {
    return (<div className={'h-[100vh] w-[100vw] flex justify-center items-center'}>
        <Loader2 size={36}/>
    </div>)
}
