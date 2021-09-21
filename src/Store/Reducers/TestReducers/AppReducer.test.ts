import {AlertContentType, AppReducer, initialStateType, removeAlert, setAlertList} from "../AppReducer"



let stateStart: initialStateType = {
    initialApp: false,
    alertList: [
        {id: 1, type: 'success', title: 'Test_1'},
        {id: 2, type: 'error', title: 'Test_2'},
        {id: 3, type: 'warning', title: 'Test_3'},
    ],
    auth: false,
    userData: null
}

test('correct work setAlertList action', () => {

    const newAlert: AlertContentType = {id: 4, type: 'info', title: 'NewTest'}

    const stateEnd = AppReducer(stateStart, setAlertList(newAlert))

    expect(stateEnd.alertList.length).toBe(4)
    expect(stateEnd.alertList[3].type).toBe('info')
})

test('correct work removeAlert action', () => {

    const stateEnd = AppReducer(stateStart, removeAlert(1))

    expect(stateEnd.alertList.length).toBe(2)
    expect(stateEnd.alertList[0].type).toBe('error')
})