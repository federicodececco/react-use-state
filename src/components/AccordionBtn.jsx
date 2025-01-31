import { useState } from "react";
export default function AccordionBtn() {
  const [trigger, setTrigger] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setTrigger(!trigger);
        }}
      ></button>
    </>
  );
}
