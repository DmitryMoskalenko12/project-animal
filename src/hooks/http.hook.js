import { useCallback } from "react";

export const useHttp = () => {

const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {

    try {
      const result = await fetch(url, {method, body, headers})

     if (!result.ok) {
      throw new Error(`Error in path ${url} status: ${result.status}`)
     }

     return result.json()
    } catch (e) {
      throw e
    }

}, [])

const post = useCallback(async (url, data, method='POST', headers = {'Content-Type': 'application/json'}, body = null)=>{
  const res = await fetch(url, {method, headers, body: data })
   return await res.json()
  },[])
  
  return {request, post};

}
