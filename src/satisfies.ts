// const dataEntries: Record<string, number> = {
//   entry1: 0.51,
//   entry2: -0.52,
// }

// dataEntries.entry3 // typescript doesn't complain about invalid key

const dataEntries = {
  entry1: 0.51,
  entry2: -0.52,
} satisfies Record<string, number>

// dataEntries.entry3
