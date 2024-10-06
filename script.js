const categories = {
    subjects: ['The cat', 'A wizard', 'The robot'],
    verbs: ['jumps over', 'casts a spell on', 'fixes'],
    objects: ['the moon', 'a tree', 'the computer']
}

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max)
}

const getRandomMessage = () => {
    let message = ''
    for (const category in categories) {
        const string = categories[category][getRandomNumber(categories[category].length)]
        message += string + ' '
    }

    return message.trimEnd()
}

const generateRandomMessage = (count) => {
    if (isNaN(count) || count < 1) {
        return 'Please provide a valid number as argument'
    }

    const messages = []
    for (let i = 0; i < count; i++) {
        messages.push(getRandomMessage())
    }

    return messages.join('\n')
}

console.log(generateRandomMessage(process.argv[2] || 1))