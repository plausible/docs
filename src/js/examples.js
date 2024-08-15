function read(path) {
  return require(`!!raw-loader?esModule=false!./${path}`)
}

const examplePaths = [
  "apiv2-examples/aggregate-request.json",
  "apiv2-examples/aggregate-response.json",
  "apiv2-examples/timeseries-request.json"
]

export default Object.fromEntries(examplePaths.map((path) => [path, read(path)]))
