import styled, {css, keyframes} from "styled-components";
import {useState} from "react";

type TimeType = "AM" | "PM";

export default function Button1() {
    const [time, setTime] = useState<TimeType>("AM");

    return <ButtonWrapper time={time}
                          onClick={() => setTime(time === "AM" ? "PM" : "AM")}>
        <Circle time={time}/>
        <Cloud1 src={"/assets/img/cloud1.svg"} time={time}/>
        <Cloud2 src={"/assets/img/cloud2.svg"} time={time}/>
        <Cloud3 src={"/assets/img/cloud3.svg"} time={time}/>
        <Star src={"/assets/img/star.svg"} time={time}/>
        <LeftLight1 time={time}/>
        <LeftLight2 time={time}/>
        <LeftLight3 time={time}/>
        <RightLight1 time={time}/>
        <RightLight2 time={time}/>
        <RightLight3 time={time}/>
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
    40% {
        background-color: #FFDA37;
        box-shadow: inset -2px -2px 8px rgb(218, 182, 27);
        transform: translate(10px, 10px);
    }
    59% {
        background-color: #FFDA37;
        box-shadow: inset -2px -2px 8px rgb(218, 182, 27);
        transform: translate(70px, 120px);
    }
    60% {
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
    40% {
        background-color: #DEDEDE;
        box-shadow: inset 0 0 8px rgb(173, 173, 173);
        transform: translate(190px, 10px);
    }
    59% {
        background-color: #DEDEDE;
        box-shadow: inset 0 0 8px rgb(173, 173, 173);
        transform: translate(120px, 120px);
    }
    60% {
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

const movecloud1Am = keyframes`
    0% {
        opacity: 0;
        transform: translate(0, 60px);
    }
    50% {
        opacity: 0;
        transform: translate(0, 60px);
    }
    100% {
        opacity: 1;
        transform: translate(0, 0);
    }
`

const movecloud1Pm = keyframes`
    0% {
        opacity: 1;
        transform: translate(0, 0);
    }
    60% {
        opacity: 0;
        transform: translate(0, 60px);
    }
    100% {
        opacity: 0;
        transform: translate(0, 60px);
    }
`

const movecloud2Am = keyframes`
    0% {
        opacity: 0;
        transform: translate(0, 60px);
    }
    80% {
        opacity: 0;
        transform: translate(0, 60px);
    }
    100% {
        opacity: 1;
        transform: translate(0, 0);
    }
`

const movecloud2Pm = keyframes`
    0% {
        opacity: 1;
        transform: translate(0, 0);
    }
    20% {
        opacity: 0;
        transform: translate(0, 60px);
    }
    100% {
        opacity: 0;
        transform: translate(0, 60px);
    }
`

const movecloud3Am = keyframes`
    0% {
        opacity: 1;
        transform: translate(60px, 0);
    }
    60% {
        opacity: 0;
        transform: translate(60px, 60px);
    }
    100% {
        opacity: 0;
        transform: translate(60px, 60px);
    }
`

const movecloud3Pm = keyframes`
    0% {
        opacity: 0;
        transform: translate(60px, 60px);
    }
    50% {
        opacity: 1;
        transform: translate(60px, 0);
    }
    100% {
        opacity: 1;
        transform: translate(60px, 0);
    }
`

const moveStarAm = keyframes`
    0% {
        opacity: 1;
        transform: translate(0px, 0px);
    }
    40% {
        opacity: 0;
        transform: translate(0px, 80px);
    }
    100% {
        opacity: 0;
        transform: translate(0px, 80px);
    }
`

const moveStarPm = keyframes`
    0% {
        opacity: 0;
        transform: translate(0px, -80px);
    }
    50% {
        opacity: 0;
        transform: translate(0px, -80px);
    }
    100% {
        opacity: 1;
        transform: translate(0px, 0px);
    }
`

const InVisible = keyframes`
    0% {
        opacity: 0;
    }
    60% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const Visible = keyframes`
    0% {
        opacity: 1;
    }
    30% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
`

const ButtonWrapper = styled.div<{ time: TimeType }>`
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 300px;
    height: 120px;
    border-radius: 100px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, .25), inset 0 0 8px rgba(0, 0, 0, .25);

    background-color: ${({time}) => (time === "AM" ? "#5DA6FF" : "#2C2352")};
    animation: ${({time}) => time === "AM" ? changeBackAm : changeBackPM} 0.6s ease-in-out forwards;
`

const Circle = styled.div<{ time: TimeType }>`
    z-index: 10;
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

const Cloud1 = styled.img<{ time: TimeType }>`
    z-index: 5;
    position: absolute;
    right: 0;
    bottom: 0;
    animation: ${({time}) => time === "AM" ? movecloud1Am : movecloud1Pm} 0.6s ease-in-out forwards;
`

const Cloud2 = styled.img<{ time: TimeType }>`
    z-index: 4;
    position: absolute;
    right: 80px;
    bottom: 10px;
    animation: ${({time}) => time === "AM" ? movecloud2Am : movecloud2Pm} 0.6s ease-in-out forwards;
`

const Cloud3 = styled.img<{ time: TimeType }>`
    z-index: 5;
    position: absolute;
    left: 0;
    bottom: 0;
    animation: ${({time}) => time === "AM" ? movecloud3Am : movecloud3Pm} 0.6s ease-in-out forwards;
`

const Star = styled.img<{time: TimeType}>`
    z-index: 2;
    position: absolute;
    left: 26px;
    top: 20px;
    animation: ${({time}) => time === "AM" ? moveStarAm : moveStarPm} 0.6s ease-in-out forwards;
`

const LeftLight1 = styled.div<{time: TimeType}>`
    position: absolute;
    z-index: 8;
    background-color: rgba(255, 255, 255, 0.1);
    width: 140px;
    height: 140px;
    border-radius: 100%;
    top: -10px;
    left: 0;
    animation: ${({time}) => time === "AM" ? InVisible : Visible} 0.8s ease-in-out forwards;
`

const LeftLight2 = styled.div<{time: TimeType}>`
    position: absolute;
    z-index: 8;
    background-color: rgba(255, 255, 255, 0.1);
    width: 180px;
    height: 180px;
    border-radius: 100%;
    top: -30px;
    left: 0;
    animation: ${({time}) => time === "AM" ? InVisible : Visible} 0.8s ease-in-out forwards;
`

const LeftLight3 = styled.div<{time: TimeType}>`
    position: absolute;
    z-index: 8;
    background-color: rgba(255, 255, 255, 0.1);
    width: 220px;
    height: 220px;
    border-radius: 100%;
    top: -50px;
    left: 0;
    animation: ${({time}) => time === "AM" ? InVisible : Visible} 0.8s ease-in-out forwards;
`

const RightLight1 = styled.div<{time: TimeType}>`
    position: absolute;
    z-index: 8;
    background-color: rgba(255, 255, 255, 0.1);
    width: 140px;
    height: 140px;
    border-radius: 100%;
    top: -10px;
    right: 0;
    animation: ${({time}) => time === "AM" ? Visible : InVisible} 0.8s ease-in-out forwards;
`

const RightLight2 = styled.div<{time: TimeType}>`
    position: absolute;
    z-index: 8;
    background-color: rgba(255, 255, 255, 0.1);
    width: 180px;
    height: 180px;
    border-radius: 100%;
    top: -30px;
    right: 0;
    animation: ${({time}) => time === "AM" ? Visible : InVisible} 0.8s ease-in-out forwards;
`

const RightLight3 = styled.div<{time: TimeType}>`
    position: absolute;
    z-index: 8;
    background-color: rgba(255, 255, 255, 0.1);
    width: 220px;
    height: 220px;
    border-radius: 100%;
    top: -50px;
    right: 0;
    animation: ${({time}) => time === "AM" ? Visible : InVisible} 0.8s ease-in-out forwards;
`