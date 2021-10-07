import axios from 'axios'
import React, { useState } from 'react'
import Card from '../Card'
import Input from '../Input'

const App = () => {

    const [results, setResults] = useState<any[]>([])

    const sendSearchRequest = async (keyword: string): Promise<void> => {
        if (keyword.length > 2) {
            const result = await axios.get('/', { params: { keyword } }).then(r => r.data)
            setResults(result)
            console.log(result)
        }
    }

    return (
        <div className="space-y-5 m-10">
            <div className="flex justify-center">
                <Input onChange={ (event) => sendSearchRequest(event.target.value) }/>
            </div>
            <div className="flex space-x-5">
                <div className="bg-white w-1/3 rounded-lg shadow-lg px-4 py-2">
                    {
                        !!results &&
                        <div>
                            <p className="text-xl">Liste des résultats : </p>
                            <ul className="flex flex-col list-disc list-inside">
                                {
                                    results.map((result, key) => (
                                        <li key={ key } className="text-blue-600 text-base">
                                            { !!result.title ? result.title : result.name }
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    }
                </div>
                <div className="w-2/3 inline-flex space-x-2">
                    {
                        results.map((result, key) => <Card key={ key } data={ result }/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default App
