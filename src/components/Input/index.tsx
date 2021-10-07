import React, { ChangeEvent } from 'react'

interface InputProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({ onChange }) => (
    <input onChange={ onChange }
           className="rounded-lg px-3 py-1 border border-blue-500 text-blue-500 capitalize focus:ring-2 outline-none text-xl shadow-xl"
           type="text" placeholder="Search"/>
)

export default Input