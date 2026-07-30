import React from 'react'
import Mycontext from './Mycontext'

function ContextProvider({children}) {

var a=20

let providingData={a}

  return (
    <Mycontext.Provider value={providingData}>
        {children}
    </Mycontext.Provider>
  )
}

export default ContextProvider