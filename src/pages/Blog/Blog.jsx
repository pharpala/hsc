import React, { useState, useEffect } from 'react'
import './Blog.css'

const Blog = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null)
    
    // Dharma Diaries photos
    const dharmaDiaries = [
        {
            id: 1,
            image: '/dharma/Screenshot_20251014_195328_Instagram.jpg',
            title: 'Dharma Diaries'
        },
        {
            id: 2,
            image: '/dharma/Screenshot_20251014_195341_Instagram.jpg',
            title: 'Dharma Diaries'
        },
        {
            id: 3,
            image: '/dharma/Screenshot_20251014_195344_Instagram.jpg',
            title: 'Dharma Diaries'
        },
        {
            id: 4,
            image: '/dharma/Screenshot_20251014_195349_Instagram.jpg',
            title: 'Dharma Diaries'
        },
        {
            id: 5,
            image: '/dharma/Screenshot_20251014_195455_Gallery.jpg',
            title: 'Dharma Diaries'
        }
    ]
    
    const handleImageClick = (index) => {
        setSelectedImageIndex(index)
    }
    
    const closeModal = () => {
        setSelectedImageIndex(null)
    }
    
    // Handle keyboard navigation in modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedImageIndex === null) return
            
            if (e.key === 'Escape') {
                closeModal()
            } else if (e.key === 'ArrowLeft') {
                setSelectedImageIndex(prev => 
                    prev > 0 ? prev - 1 : dharmaDiaries.length - 1
                )
            } else if (e.key === 'ArrowRight') {
                setSelectedImageIndex(prev => 
                    prev < dharmaDiaries.length - 1 ? prev + 1 : 0
                )
            }
        }
        
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [selectedImageIndex, dharmaDiaries.length])
    
    return (
        <div className="blog-container">
            <div className="blog-header">
                <h1 className="blog-title">Dharma Diaries</h1>
                <p className="blog-subtitle">Capturing moments from our spiritual and cultural journey</p>
            </div>
            
            <div className="dharma-photo-grid">
                {dharmaDiaries.map((diary, index) => (
                    <div 
                        key={diary.id} 
                        className="dharma-photo-card"
                        onClick={() => handleImageClick(index)}
                    >
                        <img src={diary.image} alt={diary.title} />
                        <div className="dharma-photo-overlay">
                            <h3>{diary.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Modal for full-size image viewing */}
            {selectedImageIndex !== null && (
                <div className="image-modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>✕</button>
                        <img
                            src={dharmaDiaries[selectedImageIndex]?.image}
                            alt={dharmaDiaries[selectedImageIndex]?.title}
                            className="modal-image"
                        />
                        <div className="modal-counter">
                            {selectedImageIndex + 1} of {dharmaDiaries.length}
                        </div>
                        <button 
                            className="modal-nav prev" 
                            onClick={(e) => {
                                e.stopPropagation()
                                setSelectedImageIndex(prev => 
                                    prev > 0 ? prev - 1 : dharmaDiaries.length - 1
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
                                    prev < dharmaDiaries.length - 1 ? prev + 1 : 0
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

export default Blog


