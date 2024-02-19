export function App() {
  const isDown = true;
  const downMessage = "Coming Soon...";

  if (isDown) return (
    <>
      <div className="absolute top-0 bottom-0 h-screen w-full overflow-hidden">
        <div className="absolute bg-transparent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] flex flex-col space-y-4">
          <p className="text-center text-[33px] font-black paint-fsm font-krona text-stroke text-stroke-teal text-fill-transparent text-lg">JITS WEBSITE</p>
          <p className="text-center font-kumbh text-[#35FFEB]">{downMessage}</p>
        </div>
        <div class="absolute h-screen w-full z-[25] opacity-80 bg-gray-900"></div>
        <video className="object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10] min-w-full min-h-full size-auto " src="/src/assets/digital-background.mp4" loop autoPlay muted/>
      </div>
    </>
  )

  return (
    <>
      JITS Website Homepage
    </>
  )
}
