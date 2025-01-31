import AccordionBtn from "./AccordionBtn";
import { useState } from "react";
import AccordionElement from "./AccordionElement";

export default function Accordion() {
  const [lookedElement, setLookedElement] = useState(0);
  return (
    <>
      <AccordionElement
        title="HTML"
        isLooked={lookedElement === 0}
        lookTrigger={() => setLookedElement(0)}
        lookShut={() => setLookedElement(100)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        necessitatibus nemo quidem. Veritatis culpa, numquam at sed, quaerat
        alias labore odio fugit eligendi iusto itaque accusantium quisquam nihil
        quasi vel.
      </AccordionElement>
      <AccordionElement
        title="CSS"
        isLooked={lookedElement === 1}
        lookTrigger={() => setLookedElement(1)}
        lookShut={() => setLookedElement(100)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        necessitatibus nemo quidem. Veritatis culpa, numquam at sed, quaerat
        alias labore odio fugit eligendi iusto itaque accusantium quisquam nihil
        quasi vel.
      </AccordionElement>
    </>
  );
}
