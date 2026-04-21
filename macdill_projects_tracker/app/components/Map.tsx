'use client';

import Image from "next/image"

export default function Map() {
    return(
        <div className="flex flex-col flex-1 items-center justify-center dark:bg-black">
            <main className="flex justify-center">
                <Image
                className='dark:invert'
                src="/US_Map.svg"
                alt="US Map"
                width={2500}
                height={2500}
                priority
                />
                
            </main>
        </div>
    )
}