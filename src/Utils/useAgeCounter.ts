import { useEffect, useState } from 'react'

interface UseAgeCounterHook {
    years: number
    months: number
    days: number
    hours: number
    minutes: number
    seconds: number
}

export const useAgeCounter = (ageInSeconds: number): UseAgeCounterHook => {
    const { years, months, days, hours, minutes, seconds } = extractTimeUnitsFromAge(ageInSeconds)
    const [yr, setYr] = useState<number>(years)
    const [mo, setMo] = useState<number>(months)
    const [d, setD] = useState<number>(days)
    const [h, setH] = useState<number>(hours)
    const [min, setMin] = useState<number>(minutes)
    const [s, setS] = useState<number>(seconds)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (s === 59) {
                setS(0)
                setMin(min + 1)
            } else {
                setS(s + 1)
            }
        }, 1000)
        return () => clearTimeout(timeout)
    }, [s])

    useEffect(() => {
        if (min % 60 === 0) {
            setMin(0)
            setH(h + 1)
        }
    }, [min])

    useEffect(() => {
        if (h % 24 === 0) {
            setH(0)
            setD(d + 1)
        }
    }, [h])

    useEffect(() => {
        if (d % 30 === 0) {
            setD(0)
            setMo(mo + 1)
        }
    }, [d])

    useEffect(() => {
        if (mo % 12 === 0) {
            setMo(0)
            setYr(yr + 1)
        }
    }, [mo])

    return { years: yr, months: mo, days: d, hours: h, minutes: min, seconds: s }
}

const extractTimeUnitsFromAge = (ageInSeconds: number): UseAgeCounterHook => {
    let timeLeft = ageInSeconds
    const years = Math.floor(timeLeft / (365.25 * 24 * 60 * 60))
    timeLeft = timeLeft - years * (365.25 * 24 * 60 * 60)
    const months = Math.floor(timeLeft / ((365 / 12) * 24 * 60 * 60))
    timeLeft = Math.floor(timeLeft - months * ((365 / 12) * 24 * 60 * 60))
    const days = Math.floor(timeLeft / (24 * 60 * 60))
    timeLeft = timeLeft - days * (24 * 60 * 60)
    const hours = Math.floor(timeLeft / (60 * 60))
    timeLeft = timeLeft - hours * (60 * 60)
    const minutes = Math.floor(timeLeft / 60)
    timeLeft = timeLeft - minutes * 60
    const seconds = timeLeft

    return { years: years, months: months, days: days, hours: hours, minutes: minutes, seconds: seconds }
}
