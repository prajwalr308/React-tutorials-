import React from 'react'

///react children
const Lesson2 = () => {
    const list = React.createElement(
        "ul",
        null,
        React.createElement("li", null, "2 lb salmon"),
        React.createElement("li", null, "5 sprigs fresh rosemary"),
        React.createElement("li", null, "2 tablespoons olive oil"),
        React.createElement("li", null, "2 small lemons"),
        React.createElement("li", null, "1 teaspoon kosher salt"),
        React.createElement("li", null, "4 cloves of chopped garlic")
        );
        console.log("children :",list);
    return (
        <div>
            <p>key is null so the error </p>
            {list}
            ----------------------------------------------------------------
        </div>
    )
}

export default Lesson2
