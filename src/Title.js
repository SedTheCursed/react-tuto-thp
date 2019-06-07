import React from "react"
import PropTypes from "prop-types"
import "./Title.css"

const Title = function({text, index}){
    switch(index) {
        case 0:
            return <h2>{text}</h2>
        case 1:
            return <h3>{text}</h3>
        case 2:
            return <h4>{text}</h4>
        case 3:
            return <h5>{text}</h5>
        case 4:
            return <h6>{text}</h6>
        default:
            return ""
    }
}

Title.defaultProps = {
    text: "TITRE",
    index: 0
}

Title.propTypes = {
    text: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
}

export default Title