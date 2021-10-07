import React from 'react'

interface ListProps {
    data: any[]
}

const List: React.FC<ListProps> = ({ data }) => (
    <ul className="flex flex-col list-disc list-inside">
        {
            data.map((result, key) => (
                <li key={ key } className="text-blue-600 text-base">
                    { typeof result === 'object' && 'title' in result ? result.title : result.name }
                </li>
            ))
        }
    </ul>
)

export default List