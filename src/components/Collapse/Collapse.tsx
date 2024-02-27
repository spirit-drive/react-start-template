import React, {useState, useRef, FC, useLayoutEffect, useEffect} from 'react';
import "./Collapse.scss"


interface CollapseProps {
    open: boolean,
    children: React.ReactNode,
}

const Collapse: FC<CollapseProps> = ({open, children}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [collapseHeight, setCollapseHeight] = useState<number>(0);
    const [childrenMount, setChildrenMount] = useState<boolean>(open);

    useEffect(() => {
        if (open) {
            setChildrenMount(true);
        }
    }, [open]);

    useLayoutEffect(() => {
        const contentElement = contentRef.current;

        if (!contentElement) return;

        const resizeObserver = new ResizeObserver(([entry]) => {
            setCollapseHeight(entry.target.scrollHeight);
        });

        resizeObserver.observe(contentElement);

        return () => resizeObserver.disconnect();
    }, [open]);

    const handleTransitionEnd = () => {
        if (!open) {
            setChildrenMount(false);
        }
    };

    return (
        <div className='collapse' style={{height: open ? collapseHeight : 0}}
             onTransitionEnd={handleTransitionEnd} ref={contentRef}>
            <div className='collapse__content'>
                {childrenMount && children}
            </div>
        </div>
    );
};

export default Collapse;