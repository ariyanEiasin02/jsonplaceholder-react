import React from 'react'
import Button from '../Button/Button'

const Form = ({ reqType, setReqType }) => {
    return (
        <form className='w-full flex justify-center' action="" onSubmit={(e) => e.preventDefault()}>
            <div className="">
                <Button buttonText="users" reqType={reqType} setReqType={setReqType} />
                <Button buttonText="posts" reqType={reqType} setReqType={setReqType} />
                <Button buttonText="comments" reqType={reqType} setReqType={setReqType} />
            </div>
        </form>
    )
}

export default Form