import React, { useEffect } from "react";

export interface IProductIconProps {
    isStartPosition: boolean;
    top: number;
    left: number;
    width: number;
    photo: string;
    onFirstMountCompleated: () => void;
}

export const ProductIcon = ({ isStartPosition, top, left, width, photo, onFirstMountCompleated }: IProductIconProps) => {

    useEffect(() => {
        if (isStartPosition) {
            onFirstMountCompleated()
        }
    }, [isStartPosition])

    
    return (
        <div style={
            {
                position: 'fixed',
                zIndex: '9999',
                top: `${top}px`,
                left: `${left}px`,
                transition: 'top 1s, left 1s'
            }
        }
        >
            <img style={{ width: `${width}px`, transition: 'width 1s' }} src={photo} />
        </div>
    )
}