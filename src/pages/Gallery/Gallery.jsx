import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './Gallery.css'

const Gallery = () => {
    const { eventId } = useParams()
    const navigate = useNavigate()
    const [selectedImageIndex, setSelectedImageIndex] = useState(null)
    const [imagesLoaded, setImagesLoaded] = useState({})
    
    // Event data with all images
    const events = {
        'saraswati': {
            title: 'Saraswati Puja',
            description: 'Celebrating the goddess of knowledge, wisdom, and learning through traditional ceremonies and community gathering.',
            images: [
                { id: 'saraswati-1', src: '/saraswati/Saraswati Puja HSC.jpg', alt: 'Saraswati Puja - Cover' },
                { id: 'saraswati-2', src: '/saraswati/IMG_7290.JPG', alt: 'Saraswati Puja - Image 2' },
                { id: 'saraswati-3', src: '/saraswati/IMG_7296.JPG', alt: 'Saraswati Puja - Image 3' },
                { id: 'saraswati-4', src: '/saraswati/IMG_7303.JPG', alt: 'Saraswati Puja - Image 4' },
                { id: 'saraswati-5', src: '/saraswati/IMG_7309.JPG', alt: 'Saraswati Puja - Image 5' },
                { id: 'saraswati-6', src: '/saraswati/IMG_7853.JPG', alt: 'Saraswati Puja - Image 6' },
                { id: 'saraswati-7', src: '/saraswati/IMG_7914.JPG', alt: 'Saraswati Puja - Image 7' }
            ],
            color: '#F59E0B',
            gradient: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
            icon: '🙏'
        },
        'garba': {
            title: 'Garba Night',
            description: 'Traditional Gujarati folk dance celebration filled with vibrant colors, music, and cultural festivities.',
            images: [
                { id: 'garba-1', src: '/garba/event cover garba GGSA.jpg', alt: 'Garba Night - Cover' },
                { id: 'garba-2', src: '/garba/exec photo garba.jpg', alt: 'Garba Night - Executive Photo' },
                { id: 'garba-3', src: '/garba/IMG-20251010-WA0013.jpg', alt: 'Garba Night - Image 3' }
            ],
            color: '#DC2626',
            gradient: 'linear-gradient(135deg, #f87171 0%, #dc2626 100%)',
            icon: '💃'
        }
    }
    
    const currentEvent = events[eventId]
    
    const handleImageClick = (index) => {
        setSelectedImageIndex(index)
    }
    
    const closeModal = () => {
        setSelectedImageIndex(null)
    }
    
    const handleBackToGallery = () => {
        navigate('/gallery')
    }
    
    const handleImageLoad = (imageId) => {
        setImagesLoaded(prev => ({ ...prev, [imageId]: true }))
    }
    
    // Handle keyboard navigation in modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedImageIndex === null) return
            
            if (e.key === 'Escape') {
                closeModal()
            } else if (e.key === 'ArrowLeft') {
                setSelectedImageIndex(prev => 
                    prev > 0 ? prev - 1 : currentEvent.images.length - 1
                )
            } else if (e.key === 'ArrowRight') {
                setSelectedImageIndex(prev => 
                    prev < currentEvent.images.length - 1 ? prev + 1 : 0
                )
            }
        }
        
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [selectedImageIndex, currentEvent])
    
    // Redirect if event doesn't exist
    useEffect(() => {
        if (!currentEvent) {
            navigate('/gallery')
        }
    }, [eventId, currentEvent, navigate])
    
    if (!currentEvent) {
        return null
    }
    
    return (
        <div className="gallery-container">
            {/* Wall Texture Background */}
            <div className="wall-background">
                <div className="wall-texture"></div>
                <div className="wall-shadows">
                    <div className="shadow-1"></div>
                    <div className="shadow-2"></div>
                    <div className="shadow-3"></div>
                </div>
            </div>
            
            {/* Back Button */}
            <button 
                className="back-button"
                onClick={handleBackToGallery}
                aria-label="Back to gallery overview"
            >
                <span className="back-arrow">←</span>
                <span>Back to Gallery</span>
            </button>
            
            {/* Gallery Title Section */}
            <div className="gallery-header">
                <h1 className="gallery-title">
                    {currentEvent.title} {currentEvent.icon}
                </h1>
            </div>
            
            {/* Pinned Photos Wall */}
            <div className="photos-wall">
                {currentEvent.images.map((image, index) => {
                    // Compact horizontal layout - more photos per row, less vertical space
                    const positions = [
                        // Top row - 4 photos
                        { x: 8, y: 8, rotation: -12, scale: 0.95, pinRotation: 15 },
                        { x: 32, y: 5, rotation: 18, scale: 1.05, pinRotation: -8 },
                        { x: 56, y: 10, rotation: -8, scale: 0.9, pinRotation: 22 },
                        { x: 78, y: 7, rotation: 15, scale: 1.1, pinRotation: -15 },
                        
                        // Middle row - 3 photos
                        { x: 15, y: 40, rotation: -22, scale: 0.88, pinRotation: 12 },
                        { x: 45, y: 35, rotation: 7, scale: 1.02, pinRotation: -20 },
                        { x: 72, y: 42, rotation: -16, scale: 0.94, pinRotation: 8 },
                        
                        // Bottom row - 2 photos
                        { x: 25, y: 68, rotation: 20, scale: 1.08, pinRotation: -12 },
                        { x: 60, y: 72, rotation: -5, scale: 0.96, pinRotation: 18 }
                    ];
                    
                    const position = positions[index] || positions[index % positions.length];
                    const randomRotation = position.rotation;
                    const randomX = position.x;
                    const randomY = position.y;
                    const randomScale = position.scale;
                    const pinRotation = position.pinRotation;
                    
                    return (
                        <div 
                            key={image.id}
                            className={`pinned-photo photo-${index + 1} ${imagesLoaded[image.id] ? 'loaded' : 'loading'}`}
                            onClick={() => handleImageClick(index)}
                            style={{ 
                                '--photo-delay': `${index * 0.2}s`,
                                '--photo-rotation': `${randomRotation}deg`,
                                '--photo-x': `${randomX}%`,
                                '--photo-y': `${randomY}%`,
                                '--photo-scale': randomScale,
                                '--pin-rotation': `${pinRotation}deg`
                            }}
                        >
                            <div className="photo-pin"></div>
                            <div className="polaroid-frame">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    onLoad={() => handleImageLoad(image.id)}
                                    className="photo-image"
                                />
                                <div className="photo-caption">
                                    {currentEvent.title} #{index + 1}
                                </div>
                            </div>
                            {!imagesLoaded[image.id] && (
                                <div className="photo-loading">
                                    <div className="loading-pulse"></div>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
            
            {/* Modal for full-size image viewing */}
            {selectedImageIndex !== null && (
                <div className="image-modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>✕</button>
                        <img
                            src={currentEvent.images[selectedImageIndex]?.src}
                            alt={currentEvent.images[selectedImageIndex]?.alt}
                            className="modal-image"
                        />
                        <div className="modal-counter">
                            {selectedImageIndex + 1} of {currentEvent.images.length}
                        </div>
                        <button 
                            className="modal-nav prev" 
                            onClick={(e) => {
                                e.stopPropagation()
                                setSelectedImageIndex(prev => 
                                    prev > 0 ? prev - 1 : currentEvent.images.length - 1
                                )
                            }}
                        >
                            ←
                        </button>
                        <button 
                            className="modal-nav next" 
                            onClick={(e) => {
                                e.stopPropagation()
                                setSelectedImageIndex(prev => 
                                    prev < currentEvent.images.length - 1 ? prev + 1 : 0
                                )
                            }}
                        >
                            →
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Gallery
