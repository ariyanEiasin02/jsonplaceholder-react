import React from 'react'

const Button = ({ buttonText, setReqType, reqType }) => {
    return (
        <button className={` mx-auto py-4 px-8 mt-6 border-l border-l-red-500 font-normal text-xl text-white ${buttonText === reqType ? "bg-red-500" : "bg-[#263E52]"}`} type='button'
            onClick={() => setReqType(buttonText)} >
            {buttonText}
        </button>
    )
}

export default Button