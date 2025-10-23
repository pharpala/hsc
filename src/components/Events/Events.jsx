import React from 'react'
import './Events.css'
import trivia from '../../assets/trivia.png'
import club from '../../assets/club.png'
import freezie from '../../assets/freezie.png'
import datefreezies from '../../assets/date-freezies.png'
import datetrivia from '../../assets/date-trivia.png'
import dateclub from '../../assets/date-club.png'
import linkedin from '../../assets/linkedin.png'
import datelinkedin from '../../assets/datelinkedin.png'
import mentalmath from '../../assets/mental-math.png'
import datemath from '../../assets/datemath.png'

const Events = () => {
    return (
        <div className="programs-container">
            <div className="programs">
                <div className='program'>
                    <img src={linkedin} alt="event" />
                    <a href="https://experienceguelph.ca/myAccount/career/events-workshops.html" target="_blank" rel="noopener noreferrer">
                        <div className="caption">
                            <img src={datelinkedin} alt="" />
                        </div>
                    </a>
                </div>

                <div className='program'>
                    <img src={mentalmath} alt="event" />
                    <a href="https://gryphlife.uoguelph.ca/event/278874" target="_blank" rel="noopener noreferrer">
                        <div className="caption">
                            <img src={datemath} alt="" />
                        </div>
                    </a>                    
                </div>
            </div>
        </div>
    )
}

export default Events