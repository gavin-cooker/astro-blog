const minimumSecure = async (req: any, res: any) => {
  try {
    res.setHeader('Content-type', 'application/json')
    res.json(JSON.stringify({'test': 'min'}))
  } catch (error) {
    res.json({ error, message: `Unable to fetch data on ${req.route.path}` })
  }
}

const latestReleases = async (req: any, res: any) => {
  try {
    res.setHeader('Content-type', 'application/json')
    res.json(JSON.stringify({'test': 'max'}))
  } catch (error) {
    res.json({ error, message: `Unable to fetch data on ${req.route.path}` })
  }
}

export {
  minimumSecure,
  latestReleases,
}
