import React from 'react'

const Lesson3 = () => {
    const items = [
        "2 lb salmon",
        "5 sprigs fresh rosemary",
        "2 tablespoons olive oil",
        "2 small lemons",
        "1 teaspoon kosher salt",
        "4 cloves of chopped garlic"
        ];
        
    const list=React.createElement(
        "ul",
        { className: "ingredients" },
        items.map((ingredient, i) =>
        React.createElement("li", { key: i }, ingredient)
        )
        );
        console.log("mapped elements with key",list)
    return (
        <div>
            <p>view children in console to check keys</p>
            {list}
            ----------------------------------------------------------------
        </div>
    )
}

export default Lesson3

