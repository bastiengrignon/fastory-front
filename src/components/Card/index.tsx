import React from 'react'
import {
    FaBirthdayCake, FaBuilding, FaGrav,
    GiLifeBar,
    GiWeight,
    ImEye,
    MdFaceRetouchingNatural,
    MdOutlineSpeed,
    MdPeople, MdTerrain, MdWaterDrop
} from 'react-icons/all'
import { Types } from '../../interfaces'

interface CardProps {
    data: Types
}

const Card: React.FC<CardProps> = ({ data }) => (
    <div className="bg-white rounded-lg shadow-lg w-full h-full p-2 text-lg capitalize">
        <div className="flex justify-between">
            <p className="font-bold text-blue-600">{ data.title || data.name }</p>
            <p className="lowercase">
                { data.height || data.average_height } { (!!data.height || !!data.average_height) && 'cm' }
                { data.length } { (!!data.length) && 'm' }
                { data.diameter } { (!!data.diameter) && 'km' }
            </p>
        </div>
        <p className="flex items-center">
            { (!!data.mass || !!data.cargo_capacity) &&
            <GiWeight className="mr-2"/> } { data.mass || data.cargo_capacity }
        </p>
        <p>{ !!data.classification && `${ data.classification }` }</p>
        <p className="flex items-center">
            { (!!data.population || !!data.crew) && <MdPeople className="mr-2"/> } { data.population || data.crew }
        </p>
        <p className="flex items-center">
            { (!!data.skin_color || !!data.skin_colors) &&
            <MdFaceRetouchingNatural className="mr-2"/> } { data.skin_color || data.skin_colors }
        </p>
        <p className="flex items-center">
            { (!!data.eye_color || !!data.eye_colors) &&
            <ImEye className="mr-2"/> } { data.eye_color || data.eye_colors }
        </p>
        <p className="flex items-center">
            { (!!data.birth_year) && <FaBirthdayCake className="mr-2"/> } { data.birth_year }
            { (!!data.average_lifespan) &&
            <GiLifeBar className="mr-2"/> } { data.average_lifespan } { !!data.average_lifespan && 'years' }
        </p>
        <p className="flex items-center">
            { !!data.max_atmosphering_speed && <MdOutlineSpeed className="mr-2"/> } { data.max_atmosphering_speed }
        </p>
        <p className="flex items-center">
            { !!data.manufacturer && <FaBuilding className="mr-2"/> } { data.manufacturer }
        </p>
        <p className="flex items-center">
            { !!data.gravity && <FaGrav className="mr-2"/> } { data.gravity }
        </p>
        <p className="flex items-center">
            { !!data.terrain && <MdTerrain className="mr-2"/> } { data.terrain }
        </p>
        <p className="flex items-center">
            { !!data.surface_water && <MdWaterDrop className="mr-2"/> } { data.surface_water }
        </p>
    </div>
)

export default Card