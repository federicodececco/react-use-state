import { useState } from "react";
import AccordionElement from "./AccordionElement";
import languages from "../data/languages";

export default function Accordion() {
  const [lookedElement, setLookedElement] = useState(0);
  return (
    <>
      <section>
        <AccordionElement
          title={languages[0].title}
          isLooked={lookedElement === 0}
          lookTrigger={() => setLookedElement(0)}
          lookShut={() => setLookedElement(100)}
        >
          {languages[0].description}
        </AccordionElement>
        <AccordionElement
          title={languages[1].title}
          isLooked={lookedElement === 1}
          lookTrigger={() => setLookedElement(1)}
          lookShut={() => setLookedElement(100)}
        >
          {languages[1].description}
        </AccordionElement>
      </section>
    </>
  );
}
