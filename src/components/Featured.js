import React from 'react'

export const Featured = ({type, contributor, subjects, collection}) => {
    return (
        <div className="featured__container">
            <h3>Featured {type}</h3>
            <div className="featured__image-main"></div>
            <div className="featured__body-main">
                <div className="featured__artist-tags">
                    <div className="featured__artist-container">
                        <div className="featured__artist-profile" />
                        <h3 className="featured__artist">{contributor}</h3>
                    </div>
                    <p className="featured__tags">{subjects.map((tag) => `#${tag} `)}</p>
                </div>
                <div className="featured__collection">
                    {collection.map((collection_name) => <div className="featured__collection-item">{collection_name} </div>)}
                </div>
            </div>
        </div>
    )
}



export default Featured;
