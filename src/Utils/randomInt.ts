// Returns random integer between min and max, INCLUSIVE
export const randomInt = (min: number, max: number): number => {
    return min + Math.floor(Math.random() * (max - min + 1))
}
