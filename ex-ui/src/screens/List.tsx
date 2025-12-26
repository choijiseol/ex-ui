import {useState} from "react";
import Flex from "../components/Flex.tsx";
import Text from "../components/Text.tsx";
import styled from "styled-components";
import Button from "./button/Button.tsx";

const SCREENS = {
    BUTTON: {
        label: "버튼",
    },
} as const;
type ScreenType = keyof typeof SCREENS;

export default function List() {
    const [currentScreen, setCurrentScreen] = useState<ScreenType>("BUTTON");

    return <Flex width={"100vw"} height={"100vh"} row>
        <ScreenList>
            {Object.entries(SCREENS).map(([key, screen]) => (
                <ScreenListItem
                    key={key}
                    active={currentScreen === key}
                    onClick={() => setCurrentScreen(key as ScreenType)}
                >
                    <Text fontSize={18}>{screen.label}</Text>
                </ScreenListItem>
            ))}
        </ScreenList>
        <Flex width={"calc(100vw - 240px)"} height={"100vh"} style={{padding: 40}}>
            { currentScreen === "BUTTON" && <Button/>}
        </Flex>
    </Flex>
}

const ScreenList = styled(Flex)`
    width: 240px;
    height: 100%;
    padding: 20px 8px;
    gap: 4px;
    border-right: 1px solid #a6a6a6;
    overflow: auto;
    box-shadow: 2px 0 6px -2px rgba(113, 113, 113, 0.2);
`;

const ScreenListItem = styled(Flex)<{ active: boolean }>`
    background-color: ${({active}) => active ? "#cdcdcd" : "#ffffff"};
    padding: 12px 8px;
    border-radius: 6px;
    cursor: pointer;

`