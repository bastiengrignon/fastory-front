import React from 'react'
import { GiWeight, ImEye, MdFaceRetouchingNatural, MdPeople } from 'react-icons/all'
import { Types } from '../../interfaces'

interface CardProps {
    data: Types
}

const Card: React.FC<CardProps> = ({ data }) => {

    return (
        <div className="bg-white rounded-lg shadow-lg w-full h-full p-2">
            <div className="flex justify-between">
                <p className="text-lg font-bold text-blue-600">{ data.title || data.name }</p>
                <p>{ data.height || data.length || data.diameter || data.average_height } { (!!data.height || !!data.length || !!data.average_height) ? 'cm' : (!!data.diameter) && 'km' }</p>
            </div>
            <p className="flex items-center text-lg capitalize">
                { (!!data.mass || !!data.cargo_capacity) && <GiWeight className="mr-2"/> } { data.mass || data.cargo_capacity }
            </p>
            <p className="capitalize">{ !!data.classification && `${ data.classification }` }</p>
            <p className="flex items-center text-lg capitalize">
                { !!data.population && <MdPeople className="mr-2"/> } { data.population }
            </p>
            <p className="flex items-center text-lg capitalize">
                { (!!data.skin_color || !!data.skin_colors) && <MdFaceRetouchingNatural className="mr-2"/> } { data.skin_color || data.skin_colors }
            </p>
            <p className="flex items-center text-lg capitalize">
                { (!!data.eye_color || !!data.eye_colors) && <ImEye className="mr-2"/> } { data.eye_color || data.eye_colors }
            </p>
        </div>
    )
}

export default Card