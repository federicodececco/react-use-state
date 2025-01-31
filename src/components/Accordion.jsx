import AccordionBtn from "./AccordionBtn";
export default function Accordion() {
  return (
    <>
      <div>
        {/* Accordion title */}
        <div className="accordion-top">
          <h1>HTML</h1>
          <AccordionBtn />
        </div>
        {/* Accordion Content */}
        <div className="accordion-bot">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            necessitatibus nemo quidem. Veritatis culpa, numquam at sed, quaerat
            alias labore odio fugit eligendi iusto itaque accusantium quisquam
            nihil quasi vel.
          </p>
        </div>
      </div>
    </>
  );
}
