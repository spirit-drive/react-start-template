import { ReactNode } from "react";
export interface ModalProps {
    visible: boolean;
    children?: string | ReactNode | null;
    close:() => void;
}