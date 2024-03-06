import Button from "../../../Components/user/button";
import _BUTTON from "../../../constants/button.constant";
import { Link } from "react-router-dom";

const SoloplayerPage = () => {
    return (
        <div>
            {
                _BUTTON[1]?.children?.map((item, index) => (
                    <Link key={index} to={item.path}>
                        <Button {...item}></Button>
                    </Link>
                ))
            }
        </div>
    )
}

export default SoloplayerPage;