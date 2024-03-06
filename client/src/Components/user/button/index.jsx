import "./style.scss";

const Button = ({
    ...props
}) => {
    return (
        <button className={["btn", props.classname].join(" ")}>
            <div className="btn-abbr">{props.abbr}</div>
            <div>
                <div className="btn-title">{props.title}</div>
                <div className="btn-subtitle">{props.subtitle}</div>
            </div>
        </button>
    )
}

export default Button;