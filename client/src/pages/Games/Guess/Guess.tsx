import cl from './Guess.module.scss'
import {useState} from 'react'
import hiddengun from './assets/monuments/1/3.png'
import hiddenflower from './assets/monuments/2/3.png'
import hiddeneagle from './assets/monuments/3/3.png'
import hiddencathedral from './assets/monuments/4/3.png'
import hiddenmens from './assets/monuments/5/3.png'
import visiblegun from './assets/monuments/1/3.png'
import visibleflower from './assets/monuments/2/3.png'
import visibleeagle from './assets/monuments/3/3.png'
import visiblecathedral from './assets/monuments/4/3.png'
import visiblemens from './assets/monuments/5/3.png'
import fullgun from './assets/monuments/1/3.png'
import fullflower from './assets/monuments/2/3.png'
import fulleagle from './assets/monuments/3/3.png'
import fullcathedral from './assets/monuments/4/3.png'
import fullmens from './assets/monuments/5/3.png'
import {useEffect} from 'react'
import { RadioButton } from '../../../components/UI/RadioButton'
interface IMonument {
    hidden: string;
    visible: string;
    full: string;
    
}

interface Props {
    
}

export const Guess: React.FC<Props> = () => {
    const [currentMonument, setCurrentMonument] = useState<IMonument>({} as IMonument);
    const [currentOption, setCurrentOption] = useState('')
    const [monuments, setMonuments] = useState<IMonument[]>([
        {hidden: hiddengun, visible: visiblegun, full: fullgun}, 
        {hidden: hiddenflower, visible: visibleflower, full: fullflower}, 
        {hidden: hiddeneagle, visible: visibleeagle, full: fulleagle}, 
        {hidden: hiddencathedral, visible: visiblecathedral, full: fullcathedral}, 
        {hidden: hiddenmens, visible: visiblemens, full: fullmens}]);
    const getRandomNumberMonument = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
   
    useEffect(() => {
        setCurrentMonument(monuments[getRandomNumberMonument(0, 5)])
    }, [])
    
    const handleChange = (e: MouseEvent) => {
        setCurrentOption(e.target)
    }
    const isChecked = (value: string) => currentOption === value
    return (
        <div className={cl.guess}>
            <div className={cl.guess__container}>
                <h3 className={cl.title}>Отгадай памятник по силуэту</h3>
                <div className={cl.img__container}>
                    <img className={cl.img} src={currentMonument.hidden} alt="" />
                </div>
                <ul className={cl.options}>
                    <RadioButton 
                            id='gun'
                            name='option'
                            value='gun'
                            onChange={handleChange}
                    />
                    <input type="radio"  name='option' className={cl.option} value='flower' onChange={(e) => setCurrentOption(e.target.value)}/>
                    <input type="radio"  name='option' className={cl.option} value='eagle' onChange={(e) => setCurrentOption(e.target.value)}/>
                    <input type="radio"  name='option' className={cl.option} value='mens' onChange={(e) => console.log(e.target.value)}/>
                </ul>
            </div>
        </div>
    )
}