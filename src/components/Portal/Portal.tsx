import { FC, ReactNode, ReactPortal } from "react";
import { createPortal } from "react-dom";

interface IPortal {

    /** Внутренне содержимое портала */
    children: ReactNode,

    /** Контейнер куда будет выводится содержимое переменной children */
    container: HTMLElement,
}

/**
 * Компонент портал. Позволяет вставлять значение из переменной children в тег hmtl-документа, 
 * описанного в переменной container
 * @param children ReactNode - Любые дочерние элементы(компоненты);
 * @param container HTMLElement - Уникальный идентификатор в документе
 * @returns ReactPortal
 */
export const Portal: FC<IPortal> = ( {children, container = document.getElementById("portal")} ): ReactPortal => {
    return createPortal(
        children
        ,container
    );
};
