import { useNavigate } from 'react-router-dom'
import cl from './Lending.module.scss'

interface Props {
    
}



export const Lending: React.FC<Props> = () => {

    const navigate = useNavigate()
    return (
        <main className={cl.lending}>
            <div className={cl.intro}>
                <h3 className={cl.subtitle}>
                    ДОБРО ПОЖАЛОВАТЬ В 
                </h3>
                <h1 className={cl.title}>
                    <span className={cl.title__item}>СМОЛЕНСКИЕ</span>
                    <span className={[cl.small_spacing, cl.title__item ].join(' ')}>МИНИ-ИГРЫ</span>
                </h1>
            </div>
            <div className={cl.registration}>
                <h1 className={cl.title}>
                    <span className={cl.title__item}>РЕГИСТРИРУЙСЯ</span>
                    <span className={[cl.small_spacing, cl.title__item ].join(' ')}>ПРЯМО СЕЙЧАС</span>
                </h1>
                <button 
                    title='Регистрация / registration' 
                    className={cl.button}
                    onClick={() => navigate('/authorization')}
                >НАЧАТЬ</button>
            </div>
        </main>
    )
}