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
        console.log(result)
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
            <div className="flex space-x-5">
                <div className="bg-white w-1/4 rounded-lg shadow-lg px-4 py-2">
                    {
                        !!results &&
                        <div>
                            <p className="text-xl">Liste des résultats : </p>
                            <List data={ results }/>
                        </div>
                    }
                </div>
                <div className="w-3/4 inline-flex space-x-2">
                    {
                        results.map((result, key) => <Card key={ key } data={ result }/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default App
