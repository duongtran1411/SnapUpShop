import "./Footer.scss";
import { Link } from "react-router-dom";
export const Footer = () => {
    return(
        <footer className="footer bg-orange">
            <div className="container py-4 text-center">
                <div className="flex align-center justify-center text-white fw-3 fs-14">
                    <Link to="/">privacy policy</Link>
                    <div className="vert-line"></div>
                    <Link to="/">term of service</Link>
                    <div className="vert-line"></div>
                    <Link to="/">About SnapUp.</Link>
                </div>
                <span className="text-white copyright-text text-manrope fs-14 fw-3">&copy; 2024 SnapUp. All Rights Reserved.</span>
            </div>
        </footer>
    )
}