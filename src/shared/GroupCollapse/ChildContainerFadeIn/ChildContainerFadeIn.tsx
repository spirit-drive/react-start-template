import React, { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";

export interface IChildContainerFadeInProps {
    child: ReactNode;
    isShow: boolean;
    onTransitionEndCallback: () => void;
}
export const ChildContainerFadeIn = ({ child, isShow, onTransitionEndCallback }: IChildContainerFadeInProps) => {
    const ref = useRef(null);
    const [isVisible, setVisible] = useState(false);

    const onTransitionEnd = (event: TransitionEvent) => {
        if(event.propertyName == 'opacity'){
            onTransitionEndCallback();
        }
    }

    useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener('transitionend', onTransitionEnd);
        }
    }, [])

    useEffect(() => {
        if (isShow) {
            setTimeout(() => setVisible(true), 0);
        }
    }, [isShow])

    return (
        <div ref={ref}>
            <div style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s' }}>
                {child}
            </div>
        </div>
    )
}