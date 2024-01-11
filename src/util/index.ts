const COLORS = [
    'red',
    'blue',
    'green',
    'yellow'
]
const SIZE = [
    // 0.5,
    // 1,
    // 1.25,
    // 1.5
    1
]
const getRandomColor = () => {
    return COLORS[Math.floor(Math.random() * COLORS.length)]
}
const getRandomSize = () => {
    return SIZE[Math.floor(Math.random() * SIZE.length)]
}
const PAGE_SIZE = 2
export {
    getRandomColor,
    getRandomSize,
    PAGE_SIZE
}