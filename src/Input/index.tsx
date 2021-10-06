import React from 'react'

const Input: React.FC = () => {
    return (
        <input
            className="rounded-lg px-3 py-1 border border-yellow-500 outline-none focus:border-2 text-xl"
            type="text" placeholder="Recherche"/>
    )
}

export default Input