import SuperInputText from '../Test/c1-SuperInputText/SuperInputText';
import React, {ChangeEvent, useState} from 'react';

type SearchByNamePropsType = {
    searchName: (name: string) => void
}

export const SearchByName = (props: SearchByNamePropsType) => {
    const [findByName, setFindByName] = useState<string>('')
    const handleChangeFindName = (e: ChangeEvent<HTMLInputElement>) => setFindByName(e.currentTarget.value)
    const onEnterHandler = () => {
        const validate = findByName.trim()
        props.searchName(validate)
        setFindByName('')
    }
    return (
        <>
            <SuperInputText name={'SearchByName'} placeholder={'Search name (onEnter)'}
                            onEnter={onEnterHandler} onChange={handleChangeFindName}
                            style={{width: '400px'}}
            />
        </>
    );
}