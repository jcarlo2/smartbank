import { createContext, useState } from "react";

export const GlobalContext = createContext([])

export default function useGlobalVariable() {
  const [isAuthorize, setIsAuthorize] = useState(true)
  const [user, setUser] = useState({
    username: '',
    lastName: 'Vendiolaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    csrf_token: '',
    remember_me_token: '',
  })

  return {
    isAuthorize: isAuthorize,
    setIsAuthorize: setIsAuthorize,
    user: user,
    setUser: setUser,
  }
}
