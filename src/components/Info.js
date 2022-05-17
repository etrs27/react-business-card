import './Info.css';
import profilePhoto from '../images/profile-photo.jpeg';
import emailIcon from '../images/email-icon.png';
import linkedinIcon from '../images/linkedin-icon.png';

export default function Info() {
    return (
        <header>
            <img className="card-photo" src={profilePhoto} alt="profile"/>
            <h1>Theodore Stansbury</h1>
            <p className="info--position">Software Engineer</p>
            <a className="info--website" href="/">Website</a>
            <div className="info--buttons">
                <div className="info--email">
                    <a className="info--links" href="/">
                        <img src={emailIcon} alt="email icon" className="info--icons"/>
                    </a>
                    <p className="info--texts">Email</p>
                </div>
                <div className="info--linkedin">
                    <a className="info--links" href="/">
                        <img src={linkedinIcon} alt="linkedin icon" className="info--icons"/>
                    </a>
                    <p className="info--texts">LinkedIn</p>
                </div>
            </div>
        </header>
    )
}