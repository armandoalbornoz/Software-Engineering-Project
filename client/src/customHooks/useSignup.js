import {useState} from 'react'
import {useAuthContext} from './useAuthContext'
import {useNavigate} from "react-router-dom"


export const useSignup = () => {
    const [error, setError] = useState('')
    const [isPending, setIsPending] = useState(false)
    const {dispatch} = useAuthContext()
    const navigate = useNavigate();    

    const signup = async (name, lastName, email, password, sex)  => {
        setIsPending(true)
        setError('')

            const response = await fetch("http://localhost:3001/auth/signup", {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify({name, lastName, email, password, sex})
            })
            const json = await response.json()
    
            if(!response.ok)
            {
                setIsPending(false)
                setError(json.message)
            }
            if(response.ok)
            {
               localStorage.setItem('user', JSON.stringify(json)) // Save user in storage
               dispatch({type: 'LOGIN', payload: json})  // update the auth context
               setIsPending(false)
               navigate("/")

            }
    }

    return {signup, isPending, error}
} 