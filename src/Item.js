import React from 'react'

export default function Item(props) {
        const {info} = props

        return (<>
            <div className="">
                <h1>{info.title}</h1>
                <p>{info.description}</p>
                <img className="max-w-xs" src={info.image} alt="" />
                <p>{info.price}</p>
            </div>
        </>)
}
