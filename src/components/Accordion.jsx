import { useState } from "react";
import AccordionElement from "./AccordionElement";
import languages from "../data/languages";

export default function Accordion() {
  const [lookedElement, setLookedElement] = useState(0);
  return (
    <>
      <section>
        {languages.map((elem) => {
          return (
            <AccordionElement
              key={elem.id}
              title={elem.title}
              isLooked={lookedElement === elem.id}
              lookTrigger={() => setLookedElement(elem.id)}
              lookShut={() => setLookedElement(100)}
            >
              {elem.description}
            </AccordionElement>
          );
        })}
      </section>
    </>
  );
}
