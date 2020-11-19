import './Other.css'
import React from 'react'

export const Other = () => {
    // MUSIC
    const musicURLs = [
        'Media/Videos/Music/ChopinScherzoN3.mp4',
        'Media/Videos/Music/Shostakovich.mp4',
        'Media/Videos/Music/ChopinEtudeOp25N1.mp4',
    ]
    const musicBoard = (
        musicURLs.map((url) => (
            <video key={`other-${url}`} className='other-video' controls>
                <source src={url} type='video/mp4' />
            </video>
        ))
    )
    // TENNIS
    return (
        <div className='other-container'>
            <section className='other-section'>

                <iframe
                    src="https://www.youtube.com/embed/RwQS8_ea49I"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </section>
        </div>
    )
}