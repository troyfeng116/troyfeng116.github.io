import './Other.css'
import React from 'react'

export const Other: React.FC = () => {
    // MUSIC
    const videoURLs = [
        'w2ldAb6jKMk',
        'fHjkQ3vkRQI',
        '-HbkyJ1RVDA',
        'LrvYGi9WWcc',
        'ALKK-PzimYI',
        '-IeaY9Xci4k',
    ]
    const videoTitles = [
        'Chopin Scherzo No. 3 in C# minor, Op. 39',
        'Shostakovich Piano Concerto No. 2 in F major, Op. 102',
        'Chopin Étude No. 1 in A-flat major, Op. 25',
        'Scriabin Etude Op. 5 in C# minor, Op. 42',
        'Chopin Scherzo No. 4 in E major, Op. 54',
        'Rachmaninoff Etude-Tableaux No. 5 in E-flat minor, Op. 39',
    ]
    const videoBoard = (
        videoURLs.map((url, i) => (
            <div className="other-section-item" key={i}>
                <iframe
                    className="other-video"
                    src={`https://www.youtube.com/embed/${url}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    color="white"
                    title={videoTitles[i]}
                />
                <p className="other-section-label">
                    {videoTitles[i]}
                </p>
            </div>
        ))
    )

    const audioURLs = [
        'Media/Videos/stravinsky-trio.mp3',
        'Media/Videos/grande-polonaise.mp3',
        'Media/Videos/Dumka.mp3',
        'Media/Videos/BachPF.mp3',
        'Media/Videos/ItalianConcertoMvt1.mp3',
        'Media/Videos/BeethovenSonataAudio.mp3',
    ]
    const audioTitles = [
        'Stravinsky L\'Histoire du Soldat, violin + clarinet + piano trio',
        'Chopin Grande Polonaise Brillante in E-flat major, Op. 22',
        'Tchaikovsky Dumka in C minor, Op. 53',
        'Bach Prelude and Fugue No. 10 in E minor, BWV 855',
        'Bach Italian Concerto, BWV 971, 1st movement',
        'Beethoven Sonata No. 3 in C major, Op. 2',
    ]
    const audioBoard = (
        audioURLs.map((url, index) => (
            <div className="other-section-item other-section-item-audio" key={index}>
                <audio controls>
                    <source src={url} type="audio/mp3" />
                </audio>
                <p className="other-section-label">{audioTitles[index]}</p>
            </div>
        ))
    )
    // TENNIS

    return (
        <div className="other-container">
            <section className="other-section">
                <h3 className="other-section-title">
                    Musician, Pianist, Performer.
                </h3>
                <section className="other-section-grid">
                    {videoBoard}
                    {audioBoard}
                </section>
            </section>
        </div>
    )
}