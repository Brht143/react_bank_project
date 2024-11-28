import React from 'react'
import { getProfile } from '../API/user'
import { useQuery } from '@tanstack/react-query'


const MyDetails = () => {
    const {data, isFetching, isSuccess,refetch, isFetched} = useQuery({
    queryKey: ["Profile"],
    queryFn: getProfile,
    enabled: true,
  })
    return(
        {
            data
        }
    )
}

export default MyDetails
