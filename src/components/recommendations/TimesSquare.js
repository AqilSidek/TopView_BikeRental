import React from 'react'

const TimesSquare = () => {
    return(
        <div className='location-wrapper'>
            <div className='location-3'>
                {/* location name */}
                <h3 className='hdr-txt-1'>New York City <br />at Night</h3>

                {/* description */}
                <p className='body-txt'>After all, this is the city that never sleeps. Start at the dazzling neon square that is Times Square,
                cruise past the Rockefeller Centre, Grand Central Terminal, and the Empire State Building.</p>
                
                {/* Description modified from <a href='https://www.timeout.com/newyork/things-to-do/best-bike-tours-in-nyc' className='link'>Timeout New York</a>
                and <a href='https://www.brooklyngiro.com/brooklyn-bike-tour/'>Brooklyn Giro</a>
                Gif created from video by <a href='https://www.youtube.com/watch?v=RuZUpStA0dM' className='link'>Affinity Imagery</a> */}
            </div>
        </div>
    )
}

export default TimesSquare;