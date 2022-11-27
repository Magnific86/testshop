import React, {createContext, useState, useEffect} from "react"
import axios from "axios"

const Context = createContext()


function Provider(props) {
    const [theme, setTheme] = useState("dark")
    const [login, setLogin] = useState(false)
    const [basket, setBasket] = useState(false)
    const [loader, setLoader] = useState(false)
    const [userlist, setUserlist] = useState(() => {
        let value = JSON.parse(localStorage.getItem("userlist"))
       if(!value) {
        return []
       }
       return value
    })


useEffect(() => {
    localStorage.setItem("userlist", JSON.stringify(userlist))
    document.title = `Товаров в корзине: ${userlist.length}`
}, [userlist])

    const [items, setItems] = useState(() => {
        (async() => {
            setLoader(true)
            try {
              const response = await axios.get("https://fakestoreapi.com/products")
              const d = await response.data
              if(d) {
                setItems(d)
              }
            } catch(e) {
                console.error(e)
            } finally {
                setLoader(false)
            }
        })()
    })
    
    function handleBasket() {
        setBasket(!basket)
    }

    function handleSignOut() {
        setBasket(false)
        setLogin(false)
    }

    function handleDeleteItem(id) {
        setUserlist(userlist.filter(u => u.id !== id))
    }

    function handleResetBasket() {
        setUserlist([])
    }


    function handleAddItem(item) {
        if(userlist.includes(item)) {
            return null
        } else if(!userlist.includes(item)) {
            setUserlist([...userlist, item])
        }
    }

    function handleLogin() {
        setLogin(!login)
    }

    useEffect(() => {
        if(theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    function handleTheme() {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (<>
    <Context.Provider
    value={{
        theme, handleTheme, login, handleLogin, basket, items, userlist, handleAddItem, handleResetBasket, handleDeleteItem,
         handleBasket, handleSignOut
    }}
    >
        {props.children}
    </Context.Provider>
    </>)
}

export {Context, Provider}