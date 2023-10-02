import { useState, useEffect } from 'react'

function Footer() {
    const [hour, setHour] = useState(new Date().getHours())
    const [min, setMinute] = useState(new Date().getMinutes())
    const currentTime = `${hour}:${min}`
    const openTime = "09:00"
    const closeTime = "18:00"

    useEffect(() => {
        setInterval(() => {
            setHour(new Date().getHours())
            setMinute(new Date().getMinutes())
        }, 1000)
    }, [])


    return (
        <>
            <p>
                {currentTime < closeTime && currentTime > openTime ?
                    `Ready to service until ${closeTime}. It's ${currentTime} now.` :
                    `Out of service until ${openTime}. It's ${currentTime} now.`}
            </p>
            <button className='bg-yellow-400 rounded p-2 hover:brightness-90'>Order</button>
        </>
    )
}

export default Footer