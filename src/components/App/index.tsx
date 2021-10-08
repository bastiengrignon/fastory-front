import axios from 'axios'
import React, { useState } from 'react'
import { Types } from '../../interfaces'
import Card from '../Card'
import Input from '../Input'
import List from '../List'

const App = () => {
    const [results, setResults] = useState<Types[]>([])
    const [keywordToSend, setKeywordToSend] = useState<string>("")

    const sendSearchRequest = async (keyword: string): Promise<void> => {
        const result = await axios.get('/', { params: { keyword } }).then(r => r.data)
        setResults(result)
    }

    return (
        <div className="space-y-5 m-10">
            <div className="flex justify-center space-x-4">
                <Input onChange={ (event) => setKeywordToSend(event.target.value) }/>
                <button className="bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                        onClick={ () => sendSearchRequest(keywordToSend) }>
                    Search
                </button>
            </div>
            <div className="grid grid-cols-6 gap-5">
                <div className="col-span-2">
                    <List data={ results }/>
                </div>
                <div className="col-span-4 grid grid-cols-3 gap-2">
                    {
                        results.map((result, key) => <Card key={ key } data={ result }/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default App
