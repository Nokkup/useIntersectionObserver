import React from "react";
import {
    wobble,
    zoomInUp,
    slideInLeft,
    tada,
    hinge,
    rotateInDownRight,
    rotateInDownLeft,
} from "react-animations";
import ScrollAnimation from "./components/ScrollAnimation/ScrollAnimation";
import Block from "./components/Block/Block";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Block color={"#A2D2FF"}>
                <ScrollAnimation
                    animationName={zoomInUp}
                    iterations={1}
                    duration="2s"
                >
                    zoomInUp
                </ScrollAnimation>
            </Block>
            <Block color={"#FEF9EF"}>
                <ScrollAnimation animationName={wobble}>¯\_</ScrollAnimation>
                (ツ)
                <ScrollAnimation animationName={wobble}>_/¯</ScrollAnimation>
            </Block>

            <ScrollAnimation
                animationName={slideInLeft}
                triggerOnce={true}
                iterations={1}
                duration="2s"
            >
                <Block color={"#FF865E"}>slideInLeft</Block>
            </ScrollAnimation>

            <Block color={"#FEE440"}>
                <ScrollAnimation animationName={tada} iterations={3}>
                    tada
                </ScrollAnimation>
            </Block>

            <Block color={"#FEF1E6"}>
                <ScrollAnimation
                    animationName={rotateInDownLeft}
                    iterations={1}
                    delay="0.2s"
                >
                    rotateInDownLeft
                </ScrollAnimation>
                |
                <ScrollAnimation
                    animationName={rotateInDownRight}
                    iterations={1}
                    delay="0.2s"
                >
                    rotateInDownRight
                </ScrollAnimation>
            </Block>
            <Block color={"#90AACB"}>
                <ScrollAnimation
                    animationName={hinge}
                    iterations={1}
                    duration="2s"
                    delay="0.2s"
                    triggerOnce={true}
                >
                    <img src="img/img.png" alt="img" width="400px" />
                </ScrollAnimation>
            </Block>
        </>
    );
};

export default App;
