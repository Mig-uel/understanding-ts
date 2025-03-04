/**
 * Conditional Types
 */

let text = 1
type StringArray = string[]
type ElementType<T> = T extends any[] ? T[number] : never

type Example1 = ElementType<StringArray>
type Example2 = ElementType<typeof text>

export {}
