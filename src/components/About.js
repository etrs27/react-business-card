import './About.css'
import profilePhoto from '../images/profile-photo.jpeg'
import emailIcon from '../images/email-icon.png'
import linkedinIcon from '../images/linkedin-icon.png'

export default function About() {
    return (
        <header>
            <img className="card-photo" src={profilePhoto} alt="profile"/>
            <h1>Theodore Stansbury</h1>
            <p className="about--position">Software Engineer</p>
            <a className="about--website" href="https://github.com/etrs27">Website</a>
            <div className="about--buttons">
                <div className="about--email">
                    <a className="about--links" href="#">
                        <img src={emailIcon} alt="email icon" className="about--icons"/>
                    </a>
                    <p className="about--texts">Email</p>
                </div>
                <div className="about--linkedin">
                    <a className="about--links" href="#">
                        <img src={linkedinIcon} alt="linkedin icon" className="about--icons"/>
                    </a>
                    <p className="about--texts">LinkedIn</p>
                </div>
            </div>
        </header>
    )
}