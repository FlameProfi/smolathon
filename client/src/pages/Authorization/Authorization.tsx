import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/UI/Input/Input';
import { AuthController } from '../../store/controllers/AuthController';
import cl from './Authorization.module.scss'
import {useState} from 'react'
import {MouseEvent} from 'react'
interface Props {
    
}

export const Authorization: React.FC<Props> = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('')
    const [username, setUsername] = useState('');
    const [hasAccount, setHasAccount] = useState(true);
    const navigate = useNavigate()
    const registration = (e: MouseEvent, email: string, password: string, username: string) => {
        e.preventDefault()
        AuthController.registration(email, password, username);
        navigate('./games/puzzle')
        
    }

    const login = (e: MouseEvent, email: string, password: string, username: string) => {
        e.preventDefault()
        navigate('/profile')
        AuthController.login(email, password, username)
    }

    const goToSignUp = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        
        setHasAccount(false)
        setPassword('')
        
        console.log(hasAccount)
    }
    const goToSignIn = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        setHasAccount(true)
        setPassword('')
        
        setRepeatPassword('')
        console.log(hasAccount)
    }


    return (
        <div className={cl.auth}>
            <div className={cl.forms__container}>
            <form 
                className={hasAccount ? cl.form : [cl.form, cl.active].join(' ')}
            >
                <h4 className={cl.title}>РЕГИСТРАЦИЯ</h4>
                <Input 
                    type="text" 
                    placeholder='ИМЯ'
                    value={username}
                    handleChange={(e) => setUsername(e.target.value)}
                    styles={{width: '380px'}}
                />
                <Input 
                    type="text" 
                    placeholder='ПОЧТА'
                    value={email}
                    handleChange={(e) => setEmail(e.target.value)}
                    styles={{width: '380px'}}
                />
                <Input 
                    type="password" 
                    placeholder='ПАРОЛЬ'
                    value={password}
                    handleChange={(e) => setPassword(e.target.value)}
                    styles={{width: '380px'}}
                />
                <Input 
                    type="password" 
                    placeholder='ПОВТОРИТЕ ПАРОЛЬ'
                    value={repeatPassword}
                    handleChange={(e) => setRepeatPassword(e.target.value)}
                    styles={{width: '380px'}}
                />
                <button 
                    className={cl.submitButton} 
                    onClick={(e) => registration(e, email, password, username)}
                >
                    Создать аккаунт
                </button>
                <p className={cl.text}>Уже есть аккаунт? <button className={cl.button} onClick={(e) => goToSignIn(e)}>Войти</button></p>
            </form>
            <form 
                className={hasAccount ? [cl.form, cl.active].join(' ') : cl.form}
            >
                <h4 className={cl.title}>АВТОРИЗАЦИЯ</h4>
                <Input 
                type="text" 
                placeholder='ИМЯ ИЛИ ПОЧТА'
                value={username}
                handleChange={(e) => setUsername(e.target.value)}
                styles={{width: '380px'}}
            />
                <Input 
                type="password" 
                placeholder='ПАРОЛЬ'
                value={password}
                handleChange={(e) => setPassword(e.target.value)}
                styles={{width: '380px'}}
            />
               
                <button 
                    className={cl.submitButton}
                    onClick={(e) => login(e, email, password)}
                >Войти</button>
                <div className={cl.buttonContainer}>
                    <button type='button' className={cl.button}>Восстановить пароль</button>
                    <button 
                        type='button'
                        className={cl.button} 
                        onClick={(e) => goToSignUp(e)}
                    >Создать аккаунт</button>
                </div>
                
            </form>
            </div>
        </div>
    )
}