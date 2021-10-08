import React from 'react'
import { Types } from '../../interfaces'

interface ListProps {
    data: Types[]
    className?: string
}

const List: React.FC<ListProps> = ({ data, className }) => (
    <div className={`bg-white rounded-lg shadow-lg p-2 ${ className }`}>
        <p className="text-2xl text-center">Results list : </p>
        <ul className="flex flex-col list-disc list-inside divide-y divide-blue-800 text-xl">
            {
                data.map((result, key) => (
                    <li key={ key } className="text-blue-600 text-base">
                        { typeof result === 'object' && 'title' in result ? result.title : result.name }
                    </li>
                ))
            }
        </ul>
    </div>
)

export default List