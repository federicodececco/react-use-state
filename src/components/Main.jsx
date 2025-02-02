import languages from "../data/languages";
import Capsule from "./Capsule";
import { see, shut } from "./functions";
import { useState } from "react";
export default function Main() {
  const [isVisible, setVisible] = useState(1);
  return (
    <>
      <main className="flex">
        <div className=" columns-md mx-auto my-4">
          {languages.map((elem) => {
            return (
              <Capsule
                key={elem.id}
                title={elem.title}
                see={() => setVisible(elem.id)}
                shut={() => setVisible(100)}
                isActive={isVisible === elem.id}
              >
                {elem.description}
              </Capsule>
            );
          })}
        </div>
      </main>
    </>
  );
}
