export default function AccordionElement({
  title,
  children,
  isLooked,
  lookTrigger,
  lookShut,
}) {
  return (
    <>
      <div>
        {isLooked ? (
          <div className="element">
            <div className="accordion-top active">
              <h1>{title}</h1>
              <div>
                <button onClick={lookShut}>
                  <i class="fa-solid fa-minus"></i>
                </button>
              </div>
            </div>
            <div className="accordion-bot">
              <p>{children}</p>
            </div>
          </div>
        ) : (
          <div className="element">
            <div className="accordion-top">
              <h1>{title}</h1>
              <div>
                <button onClick={lookTrigger}>
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
