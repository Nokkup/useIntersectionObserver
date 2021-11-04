import React from "react";
import styled, { keyframes } from "styled-components";
import useIntersectionObserver from "../../hooks/useIntersectionObserver/useIntersectionObserver";

const Animation = styled.div`
    animation-duration: ${({ duration }) => duration || "1s"};
    animation-delay: ${({ delay }) => delay || "0s"};
    animation-iteration-count: ${({ iterations }) => iterations || "infinite"};
    animation-name: ${({ animationName, isVisible }) =>
        isVisible ? keyframes`${animationName}` : "none"};
`;

const ScrollAnimation = (props) => {
    const [ref, isVisible] = useIntersectionObserver({
        root: props.root,
        rootMargin: props.rootMargin,
        threshold: props.threshold,
        triggerOnce: props.triggerOnce,
    });

    return (
        <Animation
            ref={ref}
            delay={props.delay}
            duration={props.duration}
            iterations={props.iterations}
            animationName={props.animationName}
            isVisible={isVisible}
        >
            {props.children}
        </Animation>
    );
};

export default ScrollAnimation;
