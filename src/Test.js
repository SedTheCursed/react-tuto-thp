import React from 'react'

export function SimpleComponent () {
    return React.createElement("p", {}, "Je suis en élément paragraphe.")
}

export function ComponentWithProps({background, color}) {
    return React.createElement("p", {style: {backgroundColor : background, color: color}}, "Je suis un paragraphe stylisé.")
}

export default class SuperComponent extends React.Component {
	constructor(props) {
		super(props)
		this.first = props.first
		this.last = props.last
	}


	fullname() {
		return `${this.first} ${this.last}`
	}


	render() {
        return (
            <div>
                <p>Salut {this.fullname()}</p>
                <SimpleComponent />
                <ComponentWithProps
                    background="purple"
                    color="gold"
                 />
            </div>
        )
    }
}