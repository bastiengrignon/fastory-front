import { Types } from '../interfaces'


export class FilterService {
    public static getTypeFromObject = (type: Types, object: string): boolean => {
        if (object === "people") return !!type.birth_year
        if (object === "films") return !!type.episode_id
        if (object === "vehicles") return !!type.vehicle_class
        if (object === "starships") return !!type.starship_class
        if (object === "species") return !!type.average_lifespan
        if (object === "planets") return !!type.diameter
        return object === "none"
    }
}