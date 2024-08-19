function read(path) {
  return require(`!!raw-loader?esModule=false!./${path}`)
}

const examplePaths = [
  "apiv2-examples/aggregate-query.json",
  "apiv2-examples/aggregate-response.json",
  "apiv2-examples/timeseries-query.json",
  "apiv2-examples/timeseries-response.json",
  "apiv2-examples/time-labels-query.json",
  "apiv2-examples/time-labels-response.json",
  "apiv2-examples/custom-date-range-query.json",
  "apiv2-examples/custom-date-range-response.json",
  "apiv2-examples/utm-query.json",
  "apiv2-examples/utm-response.json",
  "apiv2-examples/filtering-basics-query.json",
  "apiv2-examples/filtering-basics-response.json",
  "apiv2-examples/country-and-city-query.json",
  "apiv2-examples/country-and-city-response.json",
  "apiv2-examples/custom-properties-query.json",
  "apiv2-examples/custom-properties-response.json",
  "apiv2-examples/imports-query.json",
  "apiv2-examples/imports-response.json",
  "apiv2-examples/imports-bad-filter-query.json",
  "apiv2-examples/imports-bad-filter-response.json",
]

export default Object.fromEntries(examplePaths.map((path) => [path, read(path)]))
