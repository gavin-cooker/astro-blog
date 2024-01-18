const COLORS = ['red', 'blue', 'green', 'yellow']
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
const buildPage = async (response: Response) => {
  const resJson = await response.json()
  return resJson.map(item => {
    return {
      slug: item.title,
      data: {
        ...item,
        heroImage: '/blog-placeholder-2.jpg',
        pubDate: dateFromObjectId(item._id)
      }
    }
  })
}
const dateFromObjectId = objectId => {
  var week = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  var date = new Date(parseInt(objectId.substring(0, 8), 16) * 1000)
  var ndate =
    formatDate(date) +
    ' ' +
    date.getHours() +
    ':' +
    date.getMinutes() +
    ':' +
    date.getSeconds() +
    ' Its ' +
    week[date.getDay()] +
    ". Month's Last Date is " +
    formatDate(new Date(date.getFullYear(), date.getMonth() + 1, 0))
  return ndate
}

var formatDate = function (Date) {
  var fDate =
    Date.getDate() + '/' + (Date.getMonth() + 1) + '/' + Date.getFullYear()
  return fDate
}
const PAGE_SIZE = 2
export { getRandomColor, getRandomSize, buildPage, dateFromObjectId, PAGE_SIZE }
