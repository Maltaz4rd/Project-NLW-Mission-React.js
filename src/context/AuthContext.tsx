import { ReactNode } from "react"
import { createContext, useEffect, useState } from "react"
import { auth, firebase } from "../services/firebase"




type AuhtContextType = {
    user: User | undefined,
    authenticate: () => Promise<void>
}

type User = {
    id: string,
    nome: string,
    avatar: string
}

type AuthContextProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuhtContextType)



export function AuthContextProvider(props: AuthContextProviderProps) {
    const [user, setUser] = useState<User>()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                const { displayName, photoURL, uid } = user

                if (!displayName || !photoURL) {
                    throw new Error('Missing information from Google account')
                }

                setUser({
                    id: uid,
                    nome: displayName,
                    avatar: photoURL
                })
            }
        })

        return () => {
            unsubscribe()
        }
    }, [])

    async function authenticate() {
        const provider = new firebase.auth.GoogleAuthProvider();


        const result = await auth.signInWithPopup(provider)

        if (result.user) {
            const { displayName, photoURL, uid } = result.user

            if (!displayName || !photoURL) {
                throw new Error('Missing information from Google account')
            }

            setUser({
                id: uid,
                nome: displayName,
                avatar: photoURL
            })
        }


        // auth.signInWithPopup(provider).then(result => {

        //   if (result.user) {
        //     const { displayName, photoURL, uid } = result.user

        //     if (!displayName || !photoURL) {
        //       throw new Error('Missing information from Google account')
        //     }

        //     setUser({
        //       id: uid,
        //       nome: displayName,
        //       avatar: photoURL
        //     })
        //   }

        // })
    }

    return (
        <AuthContext.Provider value={{ user, authenticate }}>
            {props.children}
        </AuthContext.Provider>
    )
}