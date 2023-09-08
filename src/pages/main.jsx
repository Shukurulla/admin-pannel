import React, { useContext, useEffect } from 'react'
import { Context } from '../context'

const Main = () => {
    const { courses, studentsm, setSelectItem } = useContext(Context)
    useEffect(() => {
        setSelectItem(0)
    }, [])

    return (
        <div className='container'>
            
        </div>
    )
}

export default Main