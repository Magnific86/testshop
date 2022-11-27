import React, {useContext} from 'react'
import { Context } from './Context'
import Item from './Item'

export default function Basket() {
const {basket, userlist, handleResetBasket, handleDeleteItem} = useContext(Context)

 if(basket) {
    return (
        <div>
            <h1>Your cart</h1>
            <ul>
                {userlist.length === 0 && <h1 className="text-5xl text-black font-bold dark:text-green-200">Add first item</h1>}
                {userlist && userlist.map(u => (
                    <li key={u.id}>
                        <Item info={u} />
                    <button onClick={() => handleDeleteItem(u.id)}
                    className="text-2xl text-black bg-slate-500 dark:bg-green-200 dark:text-slate-500 rounded-full px-4 py-2 mt-8"
                    >Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => handleResetBasket()}
            className="text-2xl bg-red-400 hover:bg-red-800 hover:underline text-white rounded-full px-4 py-2 mt-8"
            >Delete all</button>
        </div>
      )
 }
}
