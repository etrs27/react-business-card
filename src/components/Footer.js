import './Footer.css';
import facebook from '../images/facebook-icon.png';
import twitter from '../images/twitter-icon.png';
import instagram from '../images/instagram-icon.png';
import github from '../images/github-icon.png';

export default function Footer() {
    return (
        <div className="footer">
            <a href="#">
                <img className="footer-icons" src={facebook} alt="facebook logo"/>
            </a>
            <a href="#">
                <img className="footer-icons" src={twitter} alt="twitter logo"/>
            </a>
            <a href="#">
                <img className="footer-icons" src={instagram} alt="instagram logo"/>
            </a>
            <a href="#">
                <img className="footer-icons" src={github} alt="github logo"/>
            </a>
        </div>
    )
}