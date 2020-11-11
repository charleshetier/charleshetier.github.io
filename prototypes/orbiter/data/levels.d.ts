interface Level {
    id: number
    name: string
    description: string
    planets: Array<PlanetInfo>
    satellites: Array<SatelliteInfo>
}

interface PlanetInfo {
    id: number
    atmosphere: boolean
}

interface SatelliteInfo {
    id: number
    planetId: number
    clockwise: boolean
}