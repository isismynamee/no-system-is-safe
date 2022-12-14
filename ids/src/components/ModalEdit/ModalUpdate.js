import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateData } from '../../redux/actions'
import { Modal } from '../modal/Modal';
import {AiFillEdit} from 'react-icons/ai'

export const ModalUpdate = ({open, setOpen, index, data}) => {
    const {User} = useSelector((state) => state)
    const [dataForm, setDataForm] = useState("")
    const [edit, setEdit] = useState(false)
    const dispatch = useDispatch()   
    
    const update = User.user

    const change = (e) => {
        const {name, value} = e.target;

        setDataForm((prev) => ({
            ...prev,
            [name] : value
        }))
    }
    
    const submitData = () => {
        dispatch(updateData(dataForm))
        setEdit(false)
        console.clear()
    }
    return (
        <Modal open={open} closeModal={setOpen}>
            <div className='flex justify-end'>
                <label onClick={() => setEdit(true)} for="" className='flex'>
                    <AiFillEdit className='my-auto mr-1' />
                    <span>Edit</span>
                </label>
            </div>
            <div className='flex'>
                <label for="" className='grid text-left m-2'>
                    <span>Name</span>
                    <input disabled={!edit} className="input input-bordered w-full max-w-xs" type="" name="customerName" onChange={(e) => change(e, index)} placeholder={update.update?.customerName ?? data.customerName} />
                </label>
                <label for="" className='grid text-left m-2'>
                    <span>Product Id</span>
                    <input disabled={!edit} className="input input-bordered w-full max-w-xs" type="" name="productID" onChange={(e) => change(e, index)} placeholder={update.update?.productID ?? data.productID} />
                </label>
            </div>
            <div className='flex'>
                <label for="" className='grid text-left m-2'>
                    <span>Product Name</span>
                    <input disabled={!edit} className="input input-bordered w-full max-w-xs" type="" name="productName" onChange={(e) => change(e, index)} placeholder={update.update?.productName ?? data.productName} />
                </label>
                <label for="" className='grid text-left m-2'>
                    <span>Amount</span>
                    <input disabled={!edit} className="input input-bordered w-full max-w-xs" type="" name="amount" onChange={(e) => change(e, index)} placeholder={update.update?.amount ?? data.amount} />
                </label>
            </div>
            <div>
                <button className='btn btn-primary w-6/12 m-2' onClick={submitData}>Update</button>
            </div>
        </Modal>
    )
}
