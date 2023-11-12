
interface Props {
    name: string;
    onChange: () => void;
    checked: boolean;
    value: string;
    id: string;
}

export const RadioButton: React.FC<Props> = ({id, name, onChange, checked, value}) => {
    return (
        
        <input 
            type='radio' 
            
            value={value}
            onChange={onChange}
            checked={checked}
            id={id}
            name={name}
            
        />
        
           
    )
}

