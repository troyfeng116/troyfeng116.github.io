import { VERSION_NUMBER } from 'Config/Constants'

if (process.env.NODE_ENV === 'development') {
    console.log(`In dev (v.${VERSION_NUMBER})`)
} else {
    console.log(`Hey! What are you doing in dev tools? (v.${VERSION_NUMBER})`)
    console.log = () => {}
    console.error = () => {}
    console.warn = () => {}
    console.groupCollapsed = () => {}
    console.groupEnd = () => {}
    console.group = () => {}
}
