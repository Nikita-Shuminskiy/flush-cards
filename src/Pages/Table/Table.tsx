import React, {useEffect} from 'react'
import HeaderTable from './ComponentsTable/HeaderTable'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from "../../Store/Store";
import {DeckInitStateType, testTC} from '../../Store/Reducers/DeckReducer';


const Table = () => {
    const {cardPacks} = useSelector<AppRootStateType,  DeckInitStateType>(state => state.deck)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(testTC())
    },[])
    return (
        <div style={{'width': '100%'}}>
            <HeaderTable data={cardPacks}/>
        </div>
    )
}
export default Table