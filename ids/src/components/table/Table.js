import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getData } from '../../redux/actions'
import { ModalUpdate } from '../ModalEdit/ModalUpdate'
import { ModalForm } from '../modalForm/ModalForm'

export const Table = () => {
    const [open, setOpen] = useState(false)
    const [modalUpdate, setModalUpdate] = useState(false)
    const dispatch = useDispatch()
    const [check, setCheck] = useState(false)
    const [childChecked, setChildChecked] = useState(false)
    const data = {
        "data": [
            {
                "id": 1372,
                "productID": "10001",
                "productName": "Test 1",
                "amount": "1000",
                "customerName" : "abc",
                "status": 0,
                "transactionDate": "2022-07-10 11:14:52",
                "createBy" : "abc",
                "createOn" : "2022-07-10 11:14:52"
            },
            {
                "id": 1373,
                "productID": "10002",
                "productName": "Test 2",
                "amount": "2000",
                "customerName" : "abc",
                "status": 0,
                "transactionDate": "2022-07-11 13:14:52",
                "createBy" : "abc",
                "createOn" : "2022-07-10 13:14:52"
            },
            {
                "id": 1374,
                "productID": "10001",
                "productName": "Test 1",
                "amount": "1000",
                "customerName" : "abc",
                "status": 0,
                "transactionDate": "2022-08-10 12:14:52",
                "createBy" : "abc",
                "createOn" : "2022-07-10 12:14:52"
            },
            {
                "id": 1375,
                "productID": "10002",
                "productName": "Test 2",
                "amount": "1000",
                "customerName" : "abc",
                "status": 1,
                "transactionDate": "2022-08-10 13:10:52",
                "createBy" : "abc",
                "createOn" : "2022-07-10 13:10:52"
            },
            {
                "id": 1376,
                "productID": "10001",
                "productName": "Test 1",
                "amount": "1000",
                "customerName" : "abc",
                "status": 0,
                "transactionDate": "2022-08-10 13:11:52",
                "createBy" : "abc",
                "createOn" : "2022-07-10 13:11:52"
            },
            {
                "id": 1377,
                "productID": "10002",
                "productName": "Test 2",
                "amount": "2000",
                "customerName" : "abc",
                "status": 0,
                "transactionDate": "2022-08-12 13:14:52",
                "createBy" : "abc",
                "createOn" : "2022-07-10 13:14:52"
            },
            {
                "id": 1378,
                "productID": "10001",
                "productName": "Test 1",
                "amount": "1000",
                "customerName" : "abc",
                "status": 0,
                "transactionDate": "2022-08-12 14:11:52",
                "createBy" : "abc",
                "createOn" : "2022-07-10 14:11:52"
            },
            {
                "id": 1379,
                "productID": "10002",
                "productName": "Test 2",
                "amount": "1000",
                "customerName" : "abc",
                "status": 1,
                "transactionDate": "2022-09-13 11:14:52",
                "createBy" : "abc",
                "createOn" : "2022-07-10 11:14:52"
            },
            {
                "id": 1380,
                "productID": "10001",
                "productName": "Test 1",
                "amount": "1000",
                "customerName" : "abc",
                "status": 0,
                "transactionDate": "2022-09-13 13:14:52",
                "createBy" : "abc",
                "createOn" : "2022-07-10 13:14:52"
            },
            {
                "id": 1381,
                "productID": "10002",
                "productName": "Test 2",
                "amount": "2000",
                "customerName" : "abc",
                "status": 0,
                "transactionDate": "2022-09-14 09:11:52",
                "createBy" : "abc",
                "createOn" : "2022-07-10 09:11:52"
            },
            {
                "id": 1382,
                "productID": "10001",
                "productName": "Test 1",
                "amount": "1000",
                "customerName" : "abc",
                "status": 0,
                "transactionDate": "2022-09-14 10:14:52",
                "createBy" : "abc",
                "createOn" : "2022-07-10 10:14:52"
            },
            {
                "id": 1383,
                "productID": "10002",
                "productName": "Test 2",
                "amount": "1000",
                "customerName" : "abc",
                "status": 1,
                "transactionDate": "2022-08-15 13:14:52",
                "createBy" : "abc",
                "createOn" : "2022-07-10 13:14:52"
            },
        ],
        "status" : [
            {
                "id" : 0,
                "name" : "SUCCESS"
            },
            {
                "id" : 1,
                "name" : "FAILED"
            }
        ]
    }
    useEffect(() => {
        dispatch(getData(data))
    }, [])
  return (
    <div className="overflow-x-auto w-full rounded-md">
        <table className="table w-full">
            <thead>
            <tr>
                <th>Name</th>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Amount</th>
                <th>Transaction Date</th>
                <th></th>
            </tr>
            </thead>
            {data.data.map((item, index) => (
                <>
                <tbody>
                <tr>
                    <th>
                        {item.customerName}
                    </th>
                    <td>
                        {item.productID}
                    </td>
                    <td>
                        {item.productName}
                    </td>
                    <td>
                        {item.amount}
                    </td>
                    <td>
                        {item.transactionDate}
                    </td>
                    <td>
                        <button onClick={() => setModalUpdate(!modalUpdate)} className="btn btn-ghost btn-xs my-2">details</button>
                    </td>
                </tr>
                <>    
                <ModalUpdate index={index} setOpen={setModalUpdate} open={modalUpdate} data={item} />
                </>    
                </tbody>
    
                </>
            ))}
        </table>
        <ModalForm setOpen={setOpen} open={open} />
        <button className='btn btn-primary w-full my-5' onClick={() => setOpen(!open)}>Add Data</button>
        </div>
  )
}
