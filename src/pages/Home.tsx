import { useHistory } from 'react-router-dom'

import { Button } from '../components/Button'
import { useAuth } from '../hoohks/useAuth'
import ilustracao from '../assets//images/illustration.svg'
import logo from '../assets//images/logo.svg'
import google_icon from '../assets//images/google-icon.svg'
import login from '../assets//images/log-in.svg'

import '../styles/auth.scss'

export function Home() {

    const history = useHistory()
    const { user, authenticate } = useAuth()

    async function navigateToNewRoom() {
        if (!user) {
            await authenticate()
        }
        history.push('/rooms/create')
    }

    return (
        <div id="pageAuth">
            <aside>
                <img src={ilustracao} alt="imagem de ilustracao do app" />
                <h1>Toda pergunta tem uma resposta.</h1>
                <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={logo} alt="logo let me ask" />
                    <button onClick={navigateToNewRoom} className="create-rom">
                        <img src={google_icon} alt="google icon" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Digite o codigo da sala"
                        />
                        <Button>
                            <img src={login} alt="login icon" />
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>

    )
}