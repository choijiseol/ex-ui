import styled from "styled-components";

const Text = styled.span<{
    fontSize?: number;
    fontWeight?: number;
    lineHeight?: number;
    width?: number;
    color?: string;
    center?: boolean;
}>`
    ${({fontSize}) => fontSize ? `font-size: ${fontSize}px;` : ''}
    ${({fontWeight}) => fontWeight ? `font-weight: ${fontWeight};` : ''}
    ${({color}) => color ? `color: ${color};` : '#000000'}
    ${({width}) => width ? `width: ${width}px;` : ''}
    line-height: ${({ lineHeight }) => lineHeight ? `${lineHeight}px` : 'auto'};
    text-align: ${({ center }) => (center ? "center" : "left")};
`

export default Text;