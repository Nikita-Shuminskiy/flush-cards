import React, { useEffect } from 'react';
import { AlertContentType } from '../../Store/Reducers/AppReducer';
import styles from './Alert.module.scss'

type AlertComponentType = {
    alertList?: AlertContentType[]
    onCloseAlert: (id: string) => void
}









export const Alert: React.FC<AlertComponentType> = ({alertList, onCloseAlert}) => {

    useEffect(() => {
        if (!alertList) {
            return
        }
        let newAlertList = alertList.filter(el => el.type !== 'error')
        if (newAlertList.length !== 0) {
            setTimeout(() => {
                onCloseAlert(newAlertList[0].id)
            }, 2000)
        }
    }, [alertList?.length])



    return (
        <div className={styles.alert}>
            {alertList?.map(el => {

                return (
                    <div
                        className={styles.alert__item}
                        onClick={() => onCloseAlert(el.id)}
                        key={el.id}
                    >
                        <p>{el.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

