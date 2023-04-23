import { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";

type FloatProps = {
    floatStrength: number,
    element: JSX.Element,
    duration: number,
    style?: any
}

const Float = ({ floatStrength, duration, style, element }: FloatProps): JSX.Element => {

    const [reverse, setReverse] = useState<boolean>(false);

    const maxHorizontal = floatStrength;
    const maxVertical = floatStrength;
    const maxRotate = floatStrength/50;

    const floatingSpring = useSpring({
        config: {duration: duration, easing: easings.easeInOutSine},
        from: { transform: `translateX(${-maxHorizontal/2}px) translateY(${-maxVertical/2}px) rotate(${-maxRotate/2}deg)` },
        to: { transform: `translateX(${maxHorizontal/2}px) translateY(${maxVertical/2}px) rotate(${maxRotate/2}deg)` },
        loop: { reset: true},
        reverse,
        onRest: () => {
            setReverse(!reverse);
        }
    });

    return (
        <animated.div style={{...style, ...floatingSpring}}>
            {element}
        </animated.div>
    );
};

export default Float;