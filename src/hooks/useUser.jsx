import React from 'react'
import useAuth from './useAuth'
import useAxioSecure from './useAxioSecure';
import { useQuery } from '@tanstack/react-query'
function useUser() {
const {user} = useAuth();
const axioSecure = useAxioSecure();
const {data: currentUser, isLoading, refetch} = useQuery({
    queryKey: ['user', user?.email],
    queryFn: async ()=>{
        const response = await axioSecure.get(`/user/${user?.email}`)
        return response.data;
    },
    enabled: !!user?.email && !!localStorage.getItem('token'),
})
return {currentUser, isLoading, refetch}
}

export default useUser