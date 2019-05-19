import React from 'react'

export function SimpleComponent () {
    return React.createElement("p", {}, "Je suis en élément paragraphe.")
}

export function ComponentWithProps({background, color}) {
    return React.createElement("p", {style: {backgroundColor : background, color: color}}, "Je suis un paragraphe stylisé.")
}