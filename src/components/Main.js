import React, { Component } from 'react'
import {Trends} from './Trends'
import {Featured} from './Featured';

export class Main extends Component {
    state={
        subjects:['abstract', 'food_and_drink', 'interiors', 'objects', 'textures'],
        collection:["Syda Productions", "GoncharukMaks", "Andrey Yurlov"],
        contributor: "Trendsetter Images"
    }
    render() {
        return (          
            <div className="body">
                <div className="body__header">
                    <h1>Community</h1>
                    <h2>Celebrating our creators by showcasing original work and curated collections from community</h2>
                </div>
                <div className="body__container">
                    <Featured type="Artists" contributor={this.state.contributor} subjects={this.state.subjects} collection={this.state.collection} />
                    <Featured type="Curators" contributor={this.state.contributor} subjects={this.state.subjects} collection={this.state.collection} />
                    <Trends subject={this.state.subjects} />
                </div>
            </div>
        )
    }
}

export default Main
