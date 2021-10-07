import React from 'react'
import { Films, People, Planets, Species, Starships, Vehicles } from '../../interfaces'

interface CardProps {
    data: People | Films | Starships | Vehicles | Species | Planets
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