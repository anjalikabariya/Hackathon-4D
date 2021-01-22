import React, { Component } from 'react'
import {Trends} from './Trends'
import {Featured} from './Featured';



export const Main =({trends, artists, curators})=> {
    return (          
        <div className="body">
            <div className="body__header">
                <h1>Community</h1>
                <h2>Celebrating our creators by showcasing original work and curated collections from community</h2>
            </div>
            <div className="body__container">
                <Featured type="Artists" contributor={artists.contributor} subjects={artists.subjects} collection={artists.collection} />
                <Featured type="Curators" contributor={curators.contributor} subjects={curators.subjects} collection={curators.collection} />
                <Trends subject={trends} />
            </div>
        </div>
    )
}

export default Main
