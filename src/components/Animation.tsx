import React from 'react';
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const FadeInAnimated = styled.div`animation: 1s ${keyframes`${fadeIn}`}; `;

export enum AnimationType {
    FadeIn = "fadeIn"
}

interface AnimationProps {
    type: AnimationType;
    children?: React.ReactNode;
    className?: string;
    hidden?: boolean;
}

export const Animation = (props: AnimationProps) => {
    return <FadeInAnimated
        className={props.className}
        hidden={props.hidden}>{props.children}</FadeInAnimated>
};
