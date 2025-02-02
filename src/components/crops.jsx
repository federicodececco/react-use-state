export default function Capsule({ children, title, see, shut, isActive }) {
  return (
    //Capsule Section
    <section className="mx-auto w-md  ">
      <div className="columns-2 flex justify-between py-3 px-2">
        <h1>{title}</h1>
        <div>
          {!isActive ? (
            <button onClick={see}>+</button>
          ) : (
            <button onClick={shut}>-</button>
          )}
        </div>
      </div>
      <div>{!isActive ? "" : <p>{children}</p>}</div>
    </section>
  );
}
