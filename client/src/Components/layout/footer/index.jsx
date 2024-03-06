import { useLocation } from "react-router-dom";

// Import Style
import "./style.scss";

const Footer = () => {
    const { pathname } = useLocation();

    return (
        <div>
            <div className={["footer", pathname === "/" ? "home-footer" : `${pathname.split("/")[1]}-footer`].join(" ")}></div>
            {
                pathname === "/room" &&
                <>
                    <div className="room_switchbracket">
                        Playing
                        <div className="custom-text">click to switch to SPECTATORS</div>
                    </div>
                    <div className="room_ingame_warning">
                        CURRENTLY INGAME
                        <div className="igw_addendum">
                            <div className="igw_spectate" data-hover="hover" data-hit="confirm">SPECTATE</div>OR
                            <div className="igw_zen" data-hover="hover" data-hit="confirm">ZEN</div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Footer;