import dynamic from 'next/dynamic'
import MapWrapper from './components/MapWrapper';



export default function Home() {
  return (
    <main className='container mx-auto p-4 flex flex-row md:flex-row gap-6'>
      {/*Nav Bar*/}
      <div>
        <h1>This is a test Map</h1>
      </div>
      



      {/*Map Section - Left side or top*/}
      <div className="flex-1">
        <MapWrapper />
      </div>
    </main>
  );
}
