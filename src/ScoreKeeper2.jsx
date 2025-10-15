import {useState} from "react"

export default function ScoreKeeper({ numPlayers = 3, target = 5 }) {
    const [scores, setScores] = useState(new Array(numPlayers).fill(0))
    // const incrementScore = (id) => {
    //     setScores(prevScores => {
    //         const copy = [...prevScores]
    //         copy[id] += 1;
    //         return copy
    //     })
    // }
    const incrementScore = (id) => {
        setScores(prevScores => {
            return prevScores.map((score, i) => {
                if (id === i) return score + 1;
                return score;
            })
        })
    }
    const reset = () => {
        setScores(new Array(numPlayers).fill(0))
    }
    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((score, id) => {
                    return (
                        <li key={id}>
                            Player{id + 1}: {score}
                            {score===target ? "WINNER!" : <button onClick={() => incrementScore(id)}>+1</button>}
                        </li>
                    )
                })}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    )
}