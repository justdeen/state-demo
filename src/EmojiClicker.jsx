import { useState } from "react"
import { v4 as uuid } from "uuid"

function randomEmoji() {
    const choices = ["🤯", "😳", "😝", "🙁"]
    return choices[Math.floor(Math.random()*choices.length)]
}

export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: "😭"}])
    const addEmoji = () => {
        setEmojis(oldEmojis => {
           return [...oldEmojis, {id: uuid(), emoji: randomEmoji()}]
        })
    }
    const deleteEmoji = (id) => {
        setEmojis(prevEmojis => {
            return prevEmojis.filter(e => e.id !== id)
        })
    }
    const heartAll = () => {
        setEmojis(prevEmojis => {
            return prevEmojis.map(e => {
                return { ...e, emoji: "❤️" }
            })
        })
    }
    return (
        <div>
            {emojis.map((e, i) => (
                <span onClick={() => deleteEmoji(e.id)} key={e.id} style={{ fontSize: "4rem" }}>{e.emoji}</span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={heartAll}>Make them all hearts</button>
        </div>
    )
}