import {Main} from './components/Main.js';
import './components/styles.scss';
import React, { Component } from 'react'



export class App extends Component {
  state={
    trends:['abstract', 'food_and_drink', 'interiors', 'objects', 'textures'],
    artists:{ collection:["Syda Productions", "GoncharukMaks", "Andrey Yurlov"],
    contributor: "Trendsetter Images", subjects:['absstract', 'food_and_drink', 'interiors', 'objects', 'textures'] },
    curators:{collection:["Planting", "New Born", "Christmas"],
    contributor: "Abstract portaits", subjects:['trees', 'nature', 'humans', 'lifestyle'] }    
  }
  render() {
    return (
      <div>
        <Main trends={this.state.trends} artists={this.state.artists} curators={this.state.curators} />
      </div>
    )
  }
}

export default App
