import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../redux/actions'
import { Modal } from '../modal/Modal'

export const ModalForm = ({open, setOpen}) => {
    const [dataForm, setDataForm] = useState("")
    const dispatch = useDispatch()
    

    const change = (e) => {
        const {name, value} = e.target;

        setDataForm((prev) => ({
            ...prev,
            [name] : value
        }))
    }
    
    const submitData = () => {
        dispatch(getData(dataForm))
    }
    return (
        <Modal open={open} closeModal={setOpen}>
            <div className='flex'>
                <label for="" className='grid text-left m-2'>
                    <span>Name</span>
                    <input className="input input-bordered w-full max-w-xs" type="" name="customerName" onChange={change} />
                </label>
                <label for="" className='grid text-left m-2'>
                    <span>Product Id</span>
                    <input className="input input-bordered w-full max-w-xs" type="" name="productID" onChange={change} />
                </label>
            </div>
            <div className='flex'>
                <label for="" className='grid text-left m-2'>
                    <span>Product Name</span>
                    <input className="input input-bordered w-full max-w-xs" type="" name="productName" onChange={change} />
                </label>
                <label for="" className='grid text-left m-2'>
                    <span>Amount</span>
                    <input className="input input-bordered w-full max-w-xs" type="" name="amount" onChange={change} />
                </label>
            </div>
            <div>
                <button className='btn btn-primary w-6/12 m-2' onClick={submitData}>Submit</button>
            </div>
        </Modal>
    )
}
