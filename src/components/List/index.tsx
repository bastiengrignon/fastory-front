import React from 'react'
import { Types } from '../../interfaces'

interface ListProps {
    data: Types[]
}

const List: React.FC<ListProps> = ({ data }) => (
    <>
        <p className="text-xl">Liste des résultats : </p>
        <ul className="flex flex-col list-disc list-inside divide-y-4">
            {
                data.map((result, key) => (
                    <li key={ key } className="text-blue-600 text-base">
                        { typeof result === 'object' && 'title' in result ? result.title : result.name }
                    </li>
                ))
            }
        </ul>
    </>
)

export default List