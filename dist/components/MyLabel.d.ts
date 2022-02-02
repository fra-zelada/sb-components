/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Este es el texto de la etiqueta
     */
    label: string;
    /**
     * Este es el tamaño de la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Todo el texto se mostrará en mayusculas
     */
    allCaps?: boolean;
    /**
     * Color de la fuente
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Color de la fuente
     */
    fontColor?: string;
    /**
     * Color de fondo
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
