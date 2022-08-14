import React from "react";
import "../../styles/ToggleButton.scss"
import { useContext } from "react";
import { UIContext } from "../../context/UIContext";
// import styled from "styled-components";

const ToggleButton = () => {

    const { handleFarenheit } = useContext(UIContext);

    return(
        <label className="switch">
            <input type="checkbox"/>
            <span className="slider">
                <span onClick={handleFarenheit} className="circle"></span>
            </span>
        </label>
    )
};

export default ToggleButton;

// const Label = styled.div`

//     font-size: 17px;
//     position: relative;
//     display: inline-block;
//     width: 3.1em;
//     height: .5em;
//     input {
//     opacity: 0;
//     width: 0;
//     height: 0;
//     &:checked{
//         transform: translateX(2em);
//         transition: .4s;
//     }
//     }
//     span.slider {
//         position: absolute;
//         cursor: pointer;
//         top: 0;
//         left: 0;
//         right: 0;
//         bottom: 0;
//         background-color: #5B5B5B;
//         transition: .4s;
//         border-radius: 30px;
//         display: flex;
//         align-items: center;
//         .circle {
//             background-color: #212121;
//             height: 3em;
//             width: 2.em;
//             border-radius: 50%;
//             position: absolute;
//             left: 0;
//             transform: translateX(-50%);
//             transition: .4s;
//             transform: translateX(2em);
//             transition: .4s;
//             &::before {
//                 position: absolute;
//                 content: "";
//                 height: 2.3em;
//                 width: 2.3em;
//                 border-radius: 50%;
//                 left: 50%;
//                 top: 50%;
//                 transform: translate(-50%, -50%);
//                 background-color: rgb(182, 182, 182);
//                 transition: .4s;
//             }
//             &::after {
//                 content: '';
//                 background-color: #212121;
//                 height: 1.7em;
//                 width: 1.7em;
//                 border-radius: 50%;
//                 position: absolute;
//                 top: 50%;
//                 left: 50%;
//                 transform: translate(-50%, -50%);
//                 transition: .4s;
//             }
//         }
//     }
//     input:checked + .slider .circle {
//         transform: translateX(2em);
//         transition: .4s;
//     }
//     input:checked + .slider .circle::before {
//         background-color: #e1e1e1;
//         transition: .4s;
//     }
//     input:checked + .slider .circle::after {
//         width: 0;
//         height: 0;
//         transition: .4s;
//     }
// `