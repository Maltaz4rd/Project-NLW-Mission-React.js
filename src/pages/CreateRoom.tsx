import ilustracao from '../assets/images/illustration.svg'
import logo from '../assets/images/logo.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button'
import { Link } from 'react-router-dom'
import { useAuth } from '../hoohks/useAuth'

export function CreateRoom() {

    const { user } = useAuth()
    console.log(user)

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
                    <h1>{user?.nome}</h1>
                    <h2>Crie uma nova sala</h2>
                    <form>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Nome da sala"
                        />
                        <Button>
                            Criar sala
                        </Button>
                        <div className="info">
                            Quer entrar em uma sala já existente?
                            <Link to="/">clique aqui</Link>
                        </div>
                    </form>
                </div>
            </main>
        </div>

    )
}