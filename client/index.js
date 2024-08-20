import { customAlphabet } from "nanoid"

console.log(generateBookId())

function generateBookId() {
    const nanoid = customAlphabet('1234567890abcdef', 10)
    return nanoid()
}
