import axios from 'axios'
import React, { ChangeEvent, useState } from 'react'
import { Types } from '../../interfaces'
import { FilterService } from '../../service/filter.service'
import Card from '../Card'
import Input from '../Input'
import List from '../List'

const App = () => {
    const [results, setResults] = useState<Types[]>([])
    const [filteredResults, setFilteredResults] = useState<Types[]>(results)
    const [keywordToSend, setKeywordToSend] = useState<string>("")

    const sendSearchRequest = async (keyword: string): Promise<void> => {
        const result = await axios.get('/', { params: { keyword } }).then(r => r.data)
        setResults(result)
        setFilteredResults(result)
    }

    const filterCards = (event: ChangeEvent<HTMLSelectElement>) => setFilteredResults(results.filter(type => FilterService.getTypeFromObject(type, event.target.value)))

    return (
        <div className="space-y-5 m-10">
            <div className="flex justify-center space-x-4">
                <Input onChange={ (event) => setKeywordToSend(event.target.value) }/>
                <button className="bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                        onClick={ () => sendSearchRequest(keywordToSend) }>
                    Search
                </button>
                <select
                    className="rounded-md outline-none border-2 border-transparent focus:border-blue-400 bg-gray-400 hover:bg-white focus:bg-white px-2"
                    onChange={ filterCards }>
                    <option value="none">None</option>
                    <option value="people">People</option>
                    <option value="films">Films</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="starships">Starships</option>
                    <option value="species">Species</option>
                    <option value="planets">Planets</option>
                </select>
            </div>
            <div className="grid grid-cols-6 gap-5">
                <div className="col-span-2">
                    <List data={ filteredResults }/>
                </div>
                <div className="col-span-4 grid grid-cols-3 gap-2">
                    {
                        filteredResults.map((result, key) => <Card key={ key } data={ result }/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default App
