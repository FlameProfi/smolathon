import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Store, { setupStore } from './store/index.ts'
import { Provider } from 'react-redux'

interface State {
  store: Store,
}

export const store = new Store();
export const Context = createContext<State>({
  store,
})

ReactDOM.createRoot( document.getElementById('root')!).render(
  <Context.Provider value={{ store }}>
  <App />
    </Context.Provider>, 
)
