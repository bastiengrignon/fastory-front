import React from 'react'
import {
    FaBirthdayCake, FaBuilding, FaGrav, FaUserCog, FaUserTie,
    GiLifeBar,
    GiWeight,
    ImEye, MdDescription,
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
            <p className="font-bold text-blue-600">
                { data.title || data.name } { !!data.episode_id && `(n°${ data.episode_id })` }
            </p>
            <p className="lowercase">
                { (!!data.height || !!data.average_height) && `${ data.height || data.average_height } cm` }
                { !!data.length && `${ data.length } m` }
                { !!data.diameter && `${ data.diameter } km` }
                { (!!data.release_date) && data.release_date }
            </p>
        </div>
        <div className="flex flex-col items-start">
            <div className="inline-flex items-center">{ !!data.mass && <GiWeight className="mr-2"/> } { data.mass }</div>
            <div className="inline-flex items-center">{ !!data.skin_color && <MdFaceRetouchingNatural className="mr-2"/> } { data.skin_color }</div>
            <div className="inline-flex items-center">{ !!data.eye_color && <ImEye className="mr-2"/> } { data.eye_color }</div>
            <div className="inline-flex items-center">{ !!data.birth_year && <FaBirthdayCake className="mr-2"/> } { data.birth_year }</div>
        </div>
        <div className="flex flex-col items-start">
            <div className="inline-flex items-center">{ !!data.director && <FaUserTie className="mr-2"/> } { data.director }</div>
            <div className="inline-flex items-center">{ !!data.producer && <FaUserCog className="mr-2"/> } { data.producer }</div>
            <div className="inline-flex items-center normal-case line-clamp-2">{ !!data.opening_crawl && <MdDescription className="mr-2 float-left"/> } { data.opening_crawl }</div>
        </div>
        <div className="flex flex-col items-start">
            <div className="inline-flex items-center">{ !!data.cargo_capacity && <GiWeight className="mr-2"/> } { data.cargo_capacity }</div>
            <div className="inline-flex items-center">{ !!data.crew && <MdPeople className="mr-2"/> } { data.crew }</div>
            <div className="inline-flex items-center">{ !!data.max_atmosphering_speed && <MdOutlineSpeed className="mr-2"/> } { data.max_atmosphering_speed }</div>
            <div className="inline-flex items-center">{ !!data.manufacturer && <FaBuilding className="mr-2"/> } { data.manufacturer }</div>
        </div>
        <div className="flex flex-col items-start">
            <div className="inline-flex items-center">{ !!data.classification && data.classification }</div>
            <div className="inline-flex items-center">{ !!data.skin_colors && <MdFaceRetouchingNatural className="mr-2"/> } { data.skin_colors }</div>
            <div className="inline-flex items-center">{ !!data.eye_colors && <ImEye className="mr-2"/> } { data.eye_colors }</div>
            <div className="inline-flex items-center">{ !!data.average_lifespan && <GiLifeBar className="mr-2"/> } { !!data.average_lifespan && `${ data.average_lifespan } years` }</div>
        </div>
        <div className="flex flex-col items-start">
            <div className="inline-flex items-center">{ !!data.population && <MdPeople className="mr-2"/> } { data.population }</div>
            <div className="inline-flex items-center">{ !!data.gravity && <FaGrav className="mr-2"/> } { data.gravity }</div>
            <div className="inline-flex items-center">{ !!data.terrain && <MdTerrain className="mr-2"/> } { data.terrain }</div>
            <div className="inline-flex items-center">{ !!data.surface_water && <MdWaterDrop className="mr-2"/> } { data.surface_water }</div>
        </div>

    </div>
)

export default Card