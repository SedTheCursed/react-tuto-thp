import React from "react"
import PropTypes from "prop-types"

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

Menu.defaultProps = {
    infos: [
        {
            index: 0,
            title: "TITLE"
        }
    ],
    currentArticle: 0,
    changeOption: () => {}
}

Menu.propTypes = {
    infos: PropTypes.array.isRequired,
    currentArticle: PropTypes.number.isRequired,
    changeOption: PropTypes.func.isRequired
}

export default Menu