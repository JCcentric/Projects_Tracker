'use client';

import dynamic from 'next/dynamic'

//Dynamically import map to disable SSR
const Map = dynamic(() => import('@/app/components/Map'), {
  ssr: false,
  loading: () => (
    <div className='h-[500px] bg-slate-100 animate-pulse'>
        <p className='text-slate-500'>Initializaing Map...</p>
    </div>
  ) 
})

export default function MapWrapper(){
    return (
        <Map/>
    )
}