import { createMutation } from 'react-query-kit'
import api from '#lib/axios-config'

type Variable = {
    email:string,
    password:string,
}

export const useLogin =  createMutation({
    mutationKey: ['/login/'],
    mutationFn: (data: Variable) => api.post('/login/', data)
})



