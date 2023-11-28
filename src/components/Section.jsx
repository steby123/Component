import React from "react";

const Section =({title, children, ...spread}) => {
    return(
        <section {...spread} >
            <h2>{title}</h2>
            {children}
        </section>
    )
}

export default Section;