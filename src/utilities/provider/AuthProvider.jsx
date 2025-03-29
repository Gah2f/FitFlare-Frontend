import React, { useEffect, useState } from 'react'
import { app } from '../../config/firebaseInit';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

export const AuthContext = React.createContext();
function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const auth =  getAuth(app);

    const signUp = async (email, password)=>{
      try {
        setLoading(true);
        return await createUserWithEmailAndPassword(auth, email, password)
      } catch (err) {
         setError(err.message);
      }
    }

    const loginUser = async (email, password)=>{
      try {
        setLoading(true);
        return await signInWithEmailAndPassword(auth, email, password)
      } catch (err) {
        setError(err.message);
      }
    }

    const logout = async ()=>{
      try {
        setLoading(true);
        return await auth.signOut()
      } catch (err) {
        setError(err.message);
      }
    }

    const updateUser = async (name,photo)=> {
      try {
        setLoading(true);
         await auth.currentUser.updateProfile({displayName: name, photoURl: photo}) 
        setUser(auth.currentUser);
    } catch (err) {
        setError(err.message);
    }
    }

    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = async ()=>{
      try {
        setLoading(true);
        return await signInWithPopup(auth, googleProvider)
      } catch (err) {
        setError(err.message);
      }
    }

    useEffect(()=>{
      const unsubscribe = auth.onAuthStateChanged((user)=>{
        setUser(user);
        
        if (user) {
          axios.post('http://localhost:3000/api/settoken', {email: user.email, name: user.displayName}).then((data)=>{
            if(data.data.token){
              localStorage.setItem('token', data.data.token);
              setLoading(false);
            }
          })
        } else {
          localStorage.removeItem('token');
          setLoading(false);
        }
      })
      return () => unsubscribe();
    },[])
    const contextValue = {user, signUp , loginUser , logout, updateUser, error, setError }
  return (
    <div>
       <AuthContext.Provider value={contextValue}>
          {children}
       </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider