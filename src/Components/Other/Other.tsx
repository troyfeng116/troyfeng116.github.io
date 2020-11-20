import './Other.css'
import React from 'react'

export const Other = () => {
    // MUSIC
    const musicURLs = [
        'w2ldAb6jKMk',
        'fHjkQ3vkRQI',
        '-HbkyJ1RVDA',
    ]
    const musicBoard = (
        musicURLs.map((url) => (
            <iframe
                className="other-video"
                //width="560"
                //height="250"
                src={`https://www.youtube.com/embed/${url}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                color="white"
            />
        ))
    )
    // TENNIS

    return (
        <div className='other-container'>
            <section className='other-section'>
                <h3 className='other-section-title'>
                    Musician, Pianist, Performer.
                </h3>
                <section className='other-section-grid'>
                    {musicBoard}
                </section>
            </section>
        </div>
    )
}