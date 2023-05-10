import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigation = useNavigate()
  const redirectToProfile =useCallback(()=>{
    if (!isAuthenticated) {
      navigation('/signin')
    }
  })
  useEffect(()=>{
    redirectToProfile()
  },[isAuthenticated, redirectToProfile]);
  return (
    <div style={{ height: '50px'}}>Profil de l'utilisateur</div>
  )
}
