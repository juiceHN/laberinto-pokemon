import React from "react"
import $ from "jquery"
import character from './character.png'

export default class Personaje extends React.Component{
	render(){
		return <img className='personaje' src = {character}/>
	}

}