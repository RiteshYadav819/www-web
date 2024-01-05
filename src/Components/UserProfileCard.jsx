import React from 'react'         
import './UserProfileCard.css'
import profile_icon from './pexels-photo-2417848.webp'

const UserProfileCard = () => {
    return (
        <div className="upsc">
            <div className="gpsc"></div>
            <div className="profile-down">
                <img src={profile_icon} alt="error" />
                <div className="profile-tittle">Ritesh</div>
                <div className="profile-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className="profile-button"><a href="mailto:ritesh@yadav.com">Contact Me</a></div>
            </div>
        </div>
    )
}
export default UserProfileCard