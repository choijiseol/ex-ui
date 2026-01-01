import styled, {css, keyframes} from "styled-components";
import {useState} from "react";

type TimeType = "AM" | "PM";

export default function Button1() {
    const [time, setTime] = useState<TimeType>("AM");

    return <ButtonWrapper time={time}
                          onClick={() => setTime(time === "AM" ? "PM" : "AM")}>
        <Circle time={time}/>
    </ButtonWrapper>
}

const changeBackAm = keyframes`
    0% {
        background-color: #2C2352;
    }
    50% {
        background-color: #393c9c; 
    }
    100% {
        background-color: #5DA6FF;
    }
`;

const changeBackPM = keyframes`
    0% {
        background-color: #5DA6FF;
    }
    50% {
        background-color: #393c9c;
    }
    100% {
        background-color: #2C2352;
    }
`;

const moveToRight = keyframes`
    0% {
        background-color: #FFDA37;
        box-shadow: inset -2px -2px 8px rgb(218, 182, 27);
        transform: translate(10px, 10px);
    }
    25% {
        background-color: #FFDA37;
        box-shadow: inset -2px -2px 8px rgb(218, 182, 27);
        transform: translate(70px, 120px);
    }
    75% {
        background-color: #DEDEDE;
        box-shadow: inset 0 0 8px rgb(173, 173, 173);
        transform: translate(120px, 120px);
    }
    100% {
        background-color: #DEDEDE;
        box-shadow: inset 0 0 8px rgb(173, 173, 173);
        transform: translate(190px, 10px);
    }
`;

const moveToLeft = keyframes`
    0% {
        background-color: #DEDEDE;
        box-shadow: inset 0 0 8px rgb(173, 173, 173);
        transform: translate(190px, 10px);
    }
    25% {
        background-color: #DEDEDE;
        box-shadow: inset 0 0 8px rgb(173, 173, 173);
        transform: translate(120px, 120px);
    }
    75% {
        background-color: #FFDA37;
        box-shadow: inset -2px -2px 8px rgb(218, 182, 27);
        transform: translate(70px, 120px);
    }
    100% {
        background-color: #FFDA37;
        box-shadow: inset -2px -2px 8px rgb(218, 182, 27);
        transform: translate(10px, 10px);
    }
`;

const ButtonWrapper = styled.div<{ time: TimeType }>`
    position: relative;
    overflow: hidden;
    width: 300px;
    height: 120px;
    border-radius: 100px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, .25), inset 0 0 8px rgba(0, 0, 0, .25);
    
    background-color: ${({time}) => (time === "AM" ? "#5DA6FF" : "#2C2352")};
    animation: ${({time}) => time === "AM" ? changeBackAm : changeBackPM} 0.6s ease-in-out forwards;
`

const Circle = styled.div<{time: TimeType}>`
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    box-shadow: inset 2px 2px 8px rgba(255, 255, 255, .8), 0 2px 2px rgba(0, 0, 0, .25);

    ${({time}) => time === "AM"
            ? css`
                background-color: #FFDA37;
                box-shadow: inset -2px -2px 8px rgb(218, 182, 27);
                animation: ${moveToLeft} 0.6s ease-in-out forwards;
            `
            : css`
                background-color: #DEDEDE;
                box-shadow: inset 0 0 8px rgb(173, 173, 173);
                animation: ${moveToRight} 0.6s ease-in-out forwards;

            `
    }
`