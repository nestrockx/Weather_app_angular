export interface City {
    name: string,
    local_names: localName[],
    lat: number
    lon: number
    country: string
}

interface localName {
    code: string
}
