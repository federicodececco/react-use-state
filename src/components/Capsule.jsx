export default function Copsule({ children, title, see, shut, isActive }) {
  return (
    //capsule section
    <section className='off mx-auto my-4 w-md shadow-xl'>
      {isActive ? (
        <>
          <div className='active flex columns-2 justify-between rounded-t-sm px-2 py-3'>
            <h1 className='text-lg font-bold'>{title}</h1>
            <div>
              <button onClick={shut} className='text-lg font-bold'>
                -
              </button>
            </div>
          </div>
          <div>
            <p className='rounded-b-sm px-2 py-4 text-base font-medium'>
              {children}
            </p>
          </div>
        </>
      ) : (
        <div>
          {' '}
          <div className='off flex columns-2 justify-between px-2 py-3'>
            <h1 className='text-lg font-bold'>{title}</h1>
            <div>
              <button onClick={see} className='text-lg font-bold'>
                +
              </button>
            </div>
          </div>
          <div></div>
        </div>
      )}
    </section>
  )
}
