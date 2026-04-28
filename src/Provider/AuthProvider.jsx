import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase.init';


export const AuthContext = createContext()
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children}) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const signIn =(email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = () =>{
        setLoading(true)
        return updateProfile(auth.currentUser, updateUser)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            console.log('current user', currentUser)
        } )
        return () => unsubscribe()
    }, [])

    const authInfo ={
        user,
        setUser,
        createUser,
        signInWithGoogle,
        signIn,
        loading,
        setLoading,
        updateUserProfile,
        logOut,
    }
  return (
    <AuthContext value={authInfo}>{children}</AuthContext>
  )
}

export default AuthProvider