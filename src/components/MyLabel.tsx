import { CSSProperties } from 'react';
import  './mylabel.css';
import { CustomFontColor } from '../stories/components/MyLabel.stories';

export interface MyLabelProps {
    /**
     * Este es el texto de la etiqueta
     */
    label: string;
    /**
     * Este es el tamaño de la etiqueta
     */
    size: 'normal'|'h1'|'h2'|'h3'; 
    /**
     * Todo el texto se mostrará en mayusculas
     */
    allCaps?: boolean;
    /**
     * Color de la fuente
     */
    color?: 'primary'|'secondary'| 'tertiary';
    /**
     * Color de la fuente
     */
    fontColor?: string ;
}


export const MyLabel = ( { 
    label     = 'No Label' , 
    size      = 'normal' ,
    allCaps   =  false ,
    color     = 'primary',
    fontColor = '#4f5135'
}: MyLabelProps ) => {
    return (
        <span className={ `label ${ size } text-${color}` }
                style={{color: fontColor}}  
        >
            { allCaps ? label.toUpperCase() : label  } 
        </span>
    )
}
