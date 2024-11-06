import { useEffect, useState } from 'react';
import { useStore } from '../../zustand/store';

export default function MovingWaterMark() {
    const studentCode = useStore((state) => state.authData.code)
    const [position, setPosition] = useState([50, 50])

    useEffect(() => {
        const positionInterval = setInterval(() => {
            const x = Math.floor(Math.random() * 101)
            const y = Math.floor(Math.random() * 101)
            setPosition([x, y])
        }, 4000)

        return () => {
            clearInterval(positionInterval)
        }
    }, [])

    return (
        <div className="position-absolute w-100 h-100 overflow-hidden z-1" style={{ pointerEvents: "none" }}>
            <span
                className="position-absolute text-black bg-white fs-6 opacity-50"
                style={{
                    top: `${position[0]}%`,
                    left: `${position[1]}%`,
                    transform: `translate(${position[1] >= 50 ? "-100%" : "0%"}, ${position[0] >= 50 ? "-100%" : "0%"})`
                }}
            >
                {studentCode}
            </span>
        </div>
    )
}