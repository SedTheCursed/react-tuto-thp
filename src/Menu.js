import React from "react"

const Menu = function({infos, currentArticle, changeOption}) {
    return (
        <select
            value = {currentArticle}
            onChange = {changeOption}
        >
            {infos.map(option =>
                <option
                    key = {option.index}
                    value = {option.index}
                >
                    {option.title}
                </option>
            )}
        </select>
    )
}

export default Menu