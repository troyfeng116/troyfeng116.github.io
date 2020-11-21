import './Other.css'
import React from 'react'

export const Other = () => {
    // MUSIC
    const musicURLs = [
        'w2ldAb6jKMk',
        'fHjkQ3vkRQI',
        '-HbkyJ1RVDA',
    ]
    const musicTitles = [
        'Chopin Scherzo No. 3 in C# minor, Op. 39',
        'Shostakovich Piano Concerto No. 2 in F major, Op. 102',
        'Chopin Étude No. 1 in A-flat major, Op. 25'
    ]
    const musicBoard = (
        musicURLs.map((url, i) => (
            <div className='other-section-item'>
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
                <p className='other-section-label'>
                    {musicTitles[i]}
                </p>
            </div>
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
                    <audio controls>
                        <source src='Media/Videos/Dumka.mp3' type='audio/mp3' />
                    </audio>
                </section>
            </section>
        </div>
    )
}