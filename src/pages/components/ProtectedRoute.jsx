import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../contexts/UserAuthContext'
import { auth } from '../../firebase'

function ProtectedRoute({children}) {
    const navigate = useNavigate()
    let { user } = useUserAuth()

    useEffect(() => {
        if (!auth) {
            return navigate('/login-register')
        }
        else {}
    })

  return children
}

export default ProtectedRoute