export default function RecipeSkeleton() {
  return Array(10)
    .fill(10)
    .map((_, index) => (
      <li key={index} className='rounded-xl bg-white shadow-xl'>
        <div className='flex flex-col rounded items-center justify-center p-0 pt-0 relative w-full h-[270px] bg-neutral-200 animate-pulse'>
          <div className='absolute bottom-4 left-4 rounded-lg bg-white '>
            <div className='flex flex-col p-4 gap-2 rounded-lg backdrop-blur-3xl'>
              <span className='inline-block bg-neutral-200 h-2 w-8 rounded animate-pulse' />
              <span className='inline-block bg-neutral-200 h-2 w-8 rounded animate-pulse' />
            </div>
          </div>
        </div>
        <div className='flex flex-col p-4 pt-0 '>
          <div className='flex justify-between items-center gap-4'>
            <div className='my-2 w-2/3 bg-neutral-200 h-4 rounded animate-pulse' />
            <div className='w-1/3 bg-neutral-200 h-4 rounded animate-pulse' />
          </div>
          <div className='bg-neutral-200 h-8 w-full rounded animate-pulse' />
        </div>
      </li>
    ))
}
