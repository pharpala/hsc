import React from 'react'
import { useNavigate } from 'react-router-dom'
import './GalleryOverview.css'

const GalleryOverview = () => {
    const navigate = useNavigate()
    
    const events = [
        {
            id: 'saraswati',
            title: 'Saraswati Puja',
            description: 'Celebrating the goddess of knowledge, wisdom, and learning through traditional ceremonies and community gathering.',
            imageCount: 7,
            coverImage: '/saraswati/Saraswati Puja HSC.jpg',
            color: '#F59E0B',
            gradient: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
            icon: '🙏'
        },
        {
            id: 'garba',
            title: 'Garba Night',
            description: 'Traditional Gujarati folk dance celebration filled with vibrant colors, music, and cultural festivities.',
            imageCount: 3,
            coverImage: '/garba/event cover garba GGSA.jpg',
            color: '#DC2626',
            gradient: 'linear-gradient(135deg, #f87171 0%, #dc2626 100%)',
            icon: '💃'
        }
    ]
    
    const handleEventClick = (eventId) => {
        navigate(`/gallery/${eventId}`)
    }
    
    return (
        <div className="gallery-overview">
            <div className="overview-header">
                <h1>Event Gallery</h1>
                <p>Explore some memorable moments from our previous events</p>
            </div>
            
            <div className="events-grid">
                {events.map((event) => (
                    <div 
                        key={event.id}
                        className="event-card"
                        onClick={() => handleEventClick(event.id)}
                        style={{
                            '--event-color': event.color,
                            '--event-gradient': event.gradient
                        }}
                    >
                        <div className="event-image-container">
                            <img 
                                src={event.coverImage} 
                                alt={event.title}
                                className="event-cover-image"
                            />
                            <div className="event-overlay">
                                <div className="event-icon">{event.icon}</div>
                                <div className="event-info">
                                    <h3>{event.title}</h3>
                                    <p>{event.description}</p>
                                    
                                </div>
                                <div className="view-gallery-btn">
                                    <span>View Gallery</span>
                                    <span className="arrow">→</span>
                                </div>
                            </div>
                        </div>
                        <div className="event-card-caption">
                            {event.title} Collection
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GalleryOverview

