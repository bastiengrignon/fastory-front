import React from 'react'
import { Types } from '../../interfaces'

interface CardProps {
    data: Types
}

const Card: React.FC<CardProps> = ({ data }) => {

    return (
        <div className="bg-white rounded-lg shadow-lg w-full h-full p-2">
            <div className="text-lg font-bold text-blue-600">
                { typeof data === 'object' && 'title' in data ? data.title : data.name }
            </div>
        </div>
    )
}

export default Card