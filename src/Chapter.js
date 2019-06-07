import React from 'react'
import PropTypes from 'prop-types'
import Title from "./Title"
import "./Chapter.css"

const Chapter = function(props) {
    const  {titles, content} = props.elm
    const titlesElm = titles.map((title, key) => <Title text={title} index={key} key={key} />)

    return (
        <article className="card">
            {titlesElm}
            <div dangerouslySetInnerHTML={{__html: content}} />
        </article>
    )
}

Chapter.propTypes = {
    elm : PropTypes.object.isRequired
}

Chapter.defaultProps = {
    elm : {
        titles: ["X. Title"],
        content: "Blablabla"
    }
}

export default Chapter