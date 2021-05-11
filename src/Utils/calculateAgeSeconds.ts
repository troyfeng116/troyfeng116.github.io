import { birthday } from 'Utils/Constants'

export const calculateAgeSeconds = (): number => {
    const now = Math.floor(new Date().getTime() / 1000)
    return now - Math.floor(birthday.getTime() / 1000)
}
