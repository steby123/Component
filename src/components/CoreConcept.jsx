import React from "react";
import { CORE_CONCEPTS } from "../data";
import CoreConcepts from "./CoreConcepts";

const CoreConcept = () => {
    return(
        <ul>
            {CORE_CONCEPTS.map ((conceptItem) =>(
              <CoreConcepts key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
    );
}

export default CoreConcept;