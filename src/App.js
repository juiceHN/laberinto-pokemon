import React, { Component } from 'react';
import $ from "jquery";
import './App.css';
import Roca from './Roca';
import Vacio from './Vacio';
import Personaje from './Personaje';
import Torchic from './Torchic';
import Zubat from './Zubat'
class App extends Component {
  constructor(){
    super()
    this.state = {
      laberinto:[],
      currentX:1,
      currentY:1,
      
    }
    $.getJSON('http://52.88.26.79:7000/?type=json&w=10&h=10').done((result)=>{
      this.setState({laberinto:result})
    })
  }
  handleKeyDown(e) {
    e.preventDefault()
        if (e.key === "ArrowRight") {
          const oldLaberinto = this.state.laberinto
          if(oldLaberinto[this.state.currentY][this.state.currentX+1] == " "){
            
              oldLaberinto[this.state.currentY][this.state.currentX] = " "
              oldLaberinto[this.state.currentY][this.state.currentX+1] = "p"
              this.setState({
                  currentX: this.state.currentX +1,
                  laberinto: oldLaberinto

              })
          } 
          if(oldLaberinto[this.state.currentY][this.state.currentX+1] == "g"){
            
              oldLaberinto[this.state.currentY][this.state.currentX] = " "
              oldLaberinto[this.state.currentY][this.state.currentX+1] = "p"
              this.setState({
                  currentX: this.state.currentX +1,
                  laberinto: oldLaberinto,
                  
              })
              
          } 
        }
        if (e.key === "ArrowLeft") {
            const oldLaberinto = this.state.laberinto
          if(oldLaberinto[this.state.currentY][this.state.currentX-1] == " "){
            
              oldLaberinto[this.state.currentY][this.state.currentX] = " "
              oldLaberinto[this.state.currentY][this.state.currentX-1] = "p"
              this.setState({
                  currentX: this.state.currentX -1,
                  laberinto: oldLaberinto
              })
          }
          if(oldLaberinto[this.state.currentY][this.state.currentX+1] == "g"){
            
              oldLaberinto[this.state.currentY][this.state.currentX] = " "
              oldLaberinto[this.state.currentY][this.state.currentX+1] = "p"
              this.setState({
                  currentX: this.state.currentX +1,
                  laberinto: oldLaberinto,
    
              })
              
          } 
        }
        if (e.key === "ArrowUp") {
            const oldLaberinto = this.state.laberinto
          if(oldLaberinto[this.state.currentY-1][this.state.currentX] == " "){
              oldLaberinto[this.state.currentY][this.state.currentX] = " "
              oldLaberinto[this.state.currentY-1][this.state.currentX] = "p"
              this.setState({
                  currentY: this.state.currentY -1,
                  laberinto: oldLaberinto
              })
          }
          if(oldLaberinto[this.state.currentY][this.state.currentX+1] == "g"){
            
              oldLaberinto[this.state.currentY][this.state.currentX] = " "
              oldLaberinto[this.state.currentY][this.state.currentX+1] = "p"
              this.setState({
                  currentX: this.state.currentX +1,
                  laberinto: oldLaberinto,
                  
              })
              
          } 
        }
        if (e.key === "ArrowDown") {
            const oldLaberinto = this.state.laberinto
          if(oldLaberinto[this.state.currentY+1][this.state.currentX] == " "){
            
              oldLaberinto[this.state.currentY][this.state.currentX] = " "
              oldLaberinto[this.state.currentY+1][this.state.currentX] = "p"
              this.setState({
                  currentY: this.state.currentY + 1,
                  laberinto: oldLaberinto
              })
          }
          if(oldLaberinto[this.state.currentY][this.state.currentX+1] == "g"){
              oldLaberinto[this.state.currentY][this.state.currentX] = " "
              oldLaberinto[this.state.currentY][this.state.currentX+1] = "p"
              this.setState({
                  currentX: this.state.currentX +1,
                  laberinto: oldLaberinto,
                  
              })
              
          } 
        }

    }
  render() {
    return (
      <div className="App">
      <img src='https://images.launchbox-app.com/197cb825-aacd-4b1d-a86c-325b23aba68b.png'/>
        <div onKeyDown = {this.handleKeyDown.bind(this)} tabIndex = "0">
      {
        this.state.laberinto.map(row=>{
          let bloque = row.map(tipoDeBloque =>{
            if((tipoDeBloque==="|")||(tipoDeBloque==="-"))
            {
              return <Roca/>
            }
            if(tipoDeBloque === '+'){
              return <Roca />
            }
            if(tipoDeBloque === " "){
              return <Vacio />
            }
            if(tipoDeBloque === "p"){
              return <Personaje />
            }
            if(tipoDeBloque === "g"){
              return <Zubat/>
            }
            return <span>{tipoDeBloque}</span>
          })
          bloque.push(<br />)
            return bloque
        })
      }
    </div>
    <div>
    <h1>Hugo Noriega</h1>
    <h1>14097</h1>
    </div>
      </div>
    );
  }
}

export default App;
