import cl from './Input.module.scss'
import {ChangeEvent} from 'react'


interface IStylesInput {
    width: string;
    
}


interface Props {
    type: string;
    placeholder: string;
    value: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    styles: IStylesInput;
}





export const Input: React.FC<Props> = ({type, placeholder, value, handleChange, styles}) => {
    return (
        
        <input 
            type={type} 
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleChange(e)}

            className={cl.input}

            style={{
                width: styles.width,
            }}
        />
                
           
    )
}

