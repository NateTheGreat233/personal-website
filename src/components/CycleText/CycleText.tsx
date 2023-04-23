import { Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { animated, useTransition } from "react-spring";

type CycleTextProps = {
    text: Array<string>,
    duration: number,
    transitionTime: number,
    style: any,
}

const CycleText = ({ text, duration, transitionTime, style }: CycleTextProps): JSX.Element => {

    const [showText, setShowText] = useState<boolean>(true);
    const [textIndex, setTextIndex] = useState<number>(0);
    const indexRef = useRef(textIndex);

    const textTransitions = useTransition(showText, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: transitionTime, preserve: true },
    });

    useEffect(() => {
        indexRef.current = textIndex;
    }, [textIndex]);

    useEffect(() => {
        const timer = cycleText();
        return () => clearInterval(timer);
    }, []);

    const cycleText = (): NodeJS.Timer => {
        const cycleTextInterval = setInterval(() => {
            setShowText(false);
            setTimeout(() => {
                let newIndex = Math.floor(Math.random()*text.length);
                if (newIndex === indexRef.current) {
                    newIndex += 1;
                    if (newIndex >= text.length) newIndex = 0;
                }
                setTextIndex(newIndex);
                setShowText(true);
            }, transitionTime);
        }, duration);

        return cycleTextInterval;
    };

    return (
        textTransitions((transitionStyle, item) => {
            return item ? <animated.span style={transitionStyle}>
                {/* https://stackoverflow.com/questions/41928567/div-cannot-appear-as-a-descendant-of-p */}
                <Typography style={style} component={"span"}>{text[textIndex]}</Typography>
            </animated.span> : null
        })
    );
};

export default CycleText;