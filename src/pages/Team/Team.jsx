import React, { useState } from 'react'
import './Team.css'

const Team = () => {
    const [selectedMember, setSelectedMember] = useState(null)
    const [activeTab, setActiveTab] = useState('leadership')
    
    const departments = {
        leadership: {
            title: "Leadership",
            icon: "👑",
            members: [
                {
                    id: 1,
                    name: "Bhumika Ashwar",
                    position: "Co-President",
                    image: "/Team/bhumika.jpeg",
                    description: "Born in Canada, Guyanese ethnicity!",
                    linkedin: "https://linkedin.com/in/bhumika-ashwar",
                    email: "bhumika@hsc.org"
                },
                {
                    id: 2,
                    name: "Devanshi Prasad",
                    position: "Co-President",
                    image: "/Team/devanshi.jpeg",
                    description: "Bio-Medical Science, Year 2",
                    linkedin: "https://linkedin.com/in/devanshi-prasad",
                    email: "devanshi@hsc.org"
                }
            ]
        },
        marketing: {
            title: "Marketing",
            icon: "📢",
            members: [
                {
                    id: 3,
                    name: "Vidhi Mehta",
                    position: "Marketing Manager",
                    image: "/Team/vidhi.jpeg",
                    description: "Bcomm in Hospitality & Tourism Management, Year 4.",
                    linkedin: "https://linkedin.com/in/vidhi-mehta",
                    email: "vidhi@hsc.org"
                }
            ]
        },
        corporate: {
            title: "Events",
            icon: "🤝",
            members: [
                {
                    id: 4,
                    name: "Kush Kher",
                    position: "Events Coordinator",
                    image: "/Team/kush.jpeg",
                    description: "Pharm Chem, Year 3",
                    linkedin: "https://linkedin.com/in/kush-kher",
                    email: "kush@hsc.org"
                }
            ]
        },
        finance: {
            title: "Finance",
            icon: "💰",
            members: [
                {
                    id: 5,
                    name: "Prashanna Wagle",
                    position: "Junior Finance Manager",
                    image: "/Team/prashana.jpeg",
                    description: "Neuroscience, Year 2",
                    linkedin: "https://linkedin.com/in/prashanna-wagle",
                    email: "prashanna@hsc.org"
                },
                {
                    id: 6,
                    name: "Jayant Chadha",
                    position: "Senior Finance Manager",
                    image: "/Team/jayant.jpeg",
                    description: "Accounting, Year 3",
                    linkedin: "https://linkedin.com/in/jayant-chadha",
                    email: "jayant@hsc.org"
                }
            ]
        },
        software: {
            title: "Software",
            icon: "💻",
            members: [
                {
                    id: 7,
                    name: "Pranay Harpalani",
                    position: "Software Engineer",
                    image: "/Team/pranay.jpeg",
                    description: "Orchestrates world-class professional development experiences that have transformed careers and created lasting business relationships.",
                    expertise: ["Executive Education", "Event Strategy", "Network Facilitation", "Leadership Development"],
                    linkedin: "https://linkedin.com/in/pranay-harpalani",
                    email: "pranay@hsc.org"
                }
            ]
        },
        communication: {
            title: "Communication",
            icon: "📧",
            members: [
                {
                    id: 8,
                    name: "Jai Poddar",
                    position: "Communication Manager",
                    image: "/Team/jai.jpeg",
                    description: "Bio-Medical Science, Year 2",
                    linkedin: "https://linkedin.com/in/jai-poddar",
                    email: "jai@hsc.org"
                }
            ]
        },
    }

    return (
        <div className="team-page">
            {/* Wall Background */}
            <div className="team-wall-background">
                <div className="wall-texture"></div>
                <div className="wall-shadows">
                    <div className="shadow-1"></div>
                    <div className="shadow-2"></div>
                    <div className="shadow-3"></div>
                </div>
            </div>

            {/* Team Header */}
            <div className="team-header">
                <h1 className="team-title">Meet Our Team</h1>
                <p className="team-subtitle">The passionate individuals driving the club forward</p>
            </div>

            {/* Department Tabs */}
            <div className="department-tabs">
                {Object.entries(departments).map(([deptKey, department]) => (
                    <button
                        key={deptKey}
                        className={`tab-button ${activeTab === deptKey ? 'active' : ''}`}
                        onClick={() => setActiveTab(deptKey)}
                    >
                        <span className="tab-icon">{department.icon}</span>
                        <span className="tab-text">{department.title}</span>
                    </button>
                ))}
            </div>

            {/* Active Department Section */}
            {departments[activeTab] && (
                <div className="department-section active">
                    
                    <div className="team-polaroids">
                        {departments[activeTab].members.map((member, index) => (
                            <div 
                                key={member.id}
                                className={`team-polaroid polaroid-${index + 1}`}
                                onClick={() => setSelectedMember(member)}
                                style={{ 
                                    '--polaroid-delay': `${index * 0.2}s`,
                                    '--polaroid-rotation': `${(Math.sin(index * 0.7) * 12)}deg`
                                }}
                            >
                                <div className="polaroid-pin"></div>
                                <div className="polaroid-frame">
                                    <div className="member-photo-container">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="member-photo"
                                        />
                                    </div>
                                    <div className="polaroid-caption">
                                        <h3 className="member-name">{member.name}</h3>
                                        <p className="member-title">{member.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Member Details Modal - Simplified */}
            {selectedMember && (
                <div className="member-modal" onClick={() => setSelectedMember(null)}>
                    <div className="modal-content simple-modal" onClick={(e) => e.stopPropagation()}>
                        <button 
                            className="modal-close" 
                            onClick={() => setSelectedMember(null)}
                        >
                            ✕
                        </button>
                        
                        <div className="modal-header simple-header">
                            <img 
                                src={selectedMember.image} 
                                alt={selectedMember.name} 
                                className="modal-photo" 
                            />
                            <div className="modal-info">
                                <h2 className="modal-name">{selectedMember.name}</h2>
                                <p className="modal-position">{selectedMember.position}</p>
                                <div className="modal-contact">
                                    <a href={selectedMember.linkedin} className="contact-link linkedin" target="_blank" rel="noopener noreferrer">
                                        LinkedIn
                                    </a>
                                    <a href={`mailto:${selectedMember.email}`} className="contact-link email">
                                        Email
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Team