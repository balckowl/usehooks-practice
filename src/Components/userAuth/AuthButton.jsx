import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'

const AuthButton = () => {
    const auth = useContext(AuthContext)

    const handleSignIn = () => {
        auth?.setUserAuth(true);
    }

    const handleSignOut = () => {
        auth?.setUserAuth(false);
    }

    return (
        <>
            {auth?.userAuth ? <button onClick={handleSignOut}>ログイン中</button> : <button onClick={handleSignIn}>ログアウト</button>}
        </>
    )
}

export default AuthButton