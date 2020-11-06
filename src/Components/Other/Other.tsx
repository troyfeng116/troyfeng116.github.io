import './Other.css'
import React from 'react'

export const Other = () => {
    // MUSIC
    const musicURLS = [
        'Media/Videos/Music/Shostakovich.mp4',
        'Media/Videos/Music/ChopinEtudeOp25N1.mp4',
    ]
    const musicBoard = (
        musicURLS.map((url) => (
            <video className='other-video' controls>
                <source src={url} type='video/mp4' />
            </video>
        ))
    )
    // TENNIS
    return (
        <div className='other-container'>
            <section className='other-section'>
                {musicBoard}
            </section>
        </div>
    )
}