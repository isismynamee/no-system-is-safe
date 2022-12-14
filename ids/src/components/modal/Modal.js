import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

export const Modal = ({children, open, closeModal}) => {
    return (
        <Transition
                show={open}
                as={Fragment}
            >
                <Dialog as="div" className="fixed inset-0 z-20 overflow-y-auto" onClose={() => closeModal(false)}>
                    <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-20" />
                    <div className="min-h-screen flex items-center justify-center px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Dialog.Panel className="bg-white rounded-lg p-5">
                                <Dialog.Description>
                                    {children}
                                </Dialog.Description>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
    )
}