import React, {useEffect} from 'react'
import HeaderTable from './ComponentsTable/HeaderTable'
import axios from "axios";



const Table = () => {
    useEffect(() => {
        axios.get('http://localhost:7542/2.0/cards/pack')
            .then((res) => {
                console.log(res)
            })
    })

    const testDataTable = [
        {
            "name": "999",
            "grade": 0,
            "shots": 1,
            "cardsCount": 0,
            "rating": 0,
        },
        {
            "name": "222",
            "grade": 0,
            "shots": 2,
            "cardsCount": 0,
            "rating": 0,
        },
        {
            "name": "333",
            "grade": 0,
            "shots": 0,
            "cardsCount": 3,
            "rating": 0,
        },
        {
            "name": "444",
            "grade": 0,
            "shots": 0,
            "cardsCount": 0,
            "rating": 4,
        }
    ]

    return (
        <div>
            <HeaderTable data={testDataTable} />
        </div>
    )
}
export default Table