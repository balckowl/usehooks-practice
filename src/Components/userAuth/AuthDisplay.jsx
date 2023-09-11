import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'

const AuthDisplay = () => {
    const auth = useContext(AuthContext)

    return (
        <div>
            {auth?.userAuth ? <p>ログアウト</p> : <p>ログイン中</p>}
        </div>
    )
}

export default AuthDisplay