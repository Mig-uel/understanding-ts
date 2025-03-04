// Function Overloading

function getLength(val: any[]): number
function getLength(val: string): string

function getLength(val: string | any[]) {
  if (typeof val === 'string') {
    const numOfWords = val.split(' ').length

    return `${numOfWords} words`
  }

  return val.length
}

const numOfWords = getLength('does this work')
numOfWords.length

const numItems = getLength(['sports', 'cookies'])
numItems.toFixed(2)
