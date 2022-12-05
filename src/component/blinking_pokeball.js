import { useEffect, useState } from "react"

const BlinkingPokeball = () => {
    const [isPokebacllColorRed, setIsPokeballColorRed] = useState(true);
    const changePokeBallColor = () => {
        const interval = setInterval(() => {
            setIsPokeballColorRed(!isPokebacllColorRed)
        }, 1000)
    }

    useEffect(() => {
        changePokeBallColor()
    }, [])

    return (
        <>
            <div className={isPokebacllColorRed ? "metamon-pokeball-container-red" : "metamon-pokeball-container-blue"}>
                <img src='/metamon/pokeball.png' className="pokeball" />
                <div className={isPokebacllColorRed ? "poke-dot-red" : "poke-dot-blue"}></div>
            </div>
        </>
    )
}

export default BlinkingPokeball;