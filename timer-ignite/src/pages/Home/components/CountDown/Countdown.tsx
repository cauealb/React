import { differenceInSeconds } from "date-fns";
import { CyclesContextAPI } from "../../Home";
import { StyleDurantion, StyledSpan, Separator } from "./Countdown.s";
import { useContext, useEffect, useState } from "react";

export function Countdown() {
    const { existCycle, markCycleFinished } = useContext(CyclesContextAPI)

    const [secondsComparesion, setSecondsComparesion] = useState(0)

    const totalSeconds = existCycle ? existCycle.minute * 60 : 0
    const secondCompare = existCycle ? totalSeconds - secondsComparesion : 0

    const minutesCompare = Math.floor(secondCompare / 60)
    const secondsCompare = secondCompare % 60
    
    const seconds = String(secondsCompare).padStart(2, '0')    
    const minutes = String(minutesCompare).padStart(2, '0')   


    useEffect(() => {
        let interval: number
        let SecondsNow: number
        
        if (existCycle) {
            interval = setInterval(() => {
                SecondsNow = differenceInSeconds(new Date(), existCycle.start)

                if(SecondsNow >= totalSeconds) {
                    markCycleFinished()
                    clearInterval(interval)
                    setSecondsComparesion(totalSeconds)
                } else {
                    setSecondsComparesion(SecondsNow)
                }

            }, 1000)
        }
        return () => {
            clearInterval(interval)        
        }
    }, [existCycle, markCycleFinished])
        
    useEffect(() => {
        if (existCycle){
            document.title = `${minutes}:${seconds}`
        } else {
            document.title = 'Ignite Timer'
        }
    }, [seconds, minutes])

    return (
        <>
            <StyleDurantion>
                <StyledSpan>{minutes[0]}</StyledSpan>
                <StyledSpan>{minutes[1]}</StyledSpan>
                <Separator>:</Separator>
                <StyledSpan>{seconds[0]}</StyledSpan>
                <StyledSpan>{seconds[1]}</StyledSpan>
            </StyleDurantion>
        </>
    )
}