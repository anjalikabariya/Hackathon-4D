import React from 'react'

export const Trends = ({subject}) => {
    return (
        <div className="trends__list">
            {subject.map((tag) => <div className="trends__item">{tag}</div> )}
        </div>
    )
}



export default Trends;
