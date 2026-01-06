
import './Footer.css';
import './index.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="#privacy">Privacy Policy</a> |
                    <a href="#terms">Terms of Service</a> |
                    <a href="#contact">Contact</a>
                </div>
                <div className="footer-social">
                    Follow me: <a href="https://linkedin.com/in/mahadihasan" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
                    <a href="https://github.com/mahadihasan" target="_blank" rel="noopener noreferrer">GitHub</a> |
                    <a href="https://twitter.com/mahadihasan" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
                <div className="footer-copyright">
                    © 2026 Mahadi Hasan. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
