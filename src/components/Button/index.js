import React from "react";
import "./button.css";
import PropTypes from "prop-types";
// function Button({text}) {
//     const btnTitle = Array.from(text);
//     return (
//         <a className="btn btn-solid btn-white" href="" target="_self">
//         <span className="btnTitle">{btnTitle}</span>
//     </a>
//     )
// };
function Button(props) {
    const {children, onClick} = props;
    return (
        <div className="btn2 hover:cursor-pointer" onClick={onClick}>
            {children}
        </div>
    )
}
Button.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    // className: PropTypes.string,
};
export default Button;