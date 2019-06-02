import React from 'react'
import './Controls.css';
import Menu from './Menu'

const Controls = function({previous, next, rank, menu, currentArticle, changeOption}) {    
    return (
        <div className = "controls">
            <div
                onClick = {previous}
                className = {
                    (rank ==="first") ?
                    "hidden" :
                    ""}
            >
                <i className = "fas fa-arrow-alt-circle-left fa-2x"></i>
            </div>
            <Menu
                infos = {menu}
                currentArticle = {currentArticle}
                changeOption = {changeOption}
            />
            <div
                onClick = {next}
                className = {
                    (rank === "last") ?
                    "hidden" :
                    ""}
            >
                <i className = "fas fa-arrow-alt-circle-right fa-2x"></i>
            </div>
        </div>
    )
}

export default Controls