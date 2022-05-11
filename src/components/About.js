import profilePhoto from '../images/profile-photo.jpeg'
import './About.css'

export default function About() {
    return (
        <header>
            <img className="card-photo" src={profilePhoto} alt="profile"/>
            <h1>Theodore Stansbury</h1>
            <p className="about--position">Software Engineer</p>
            <a className="about--website" href="https://github.com/etrs27">Website</a>
            <div className="about--buttons">
                <a className="about--email" href="#">Email</a>
                <a className="about--linkedin" href="#">LinkedIn</a>
            </div>
        </header>
    )
}