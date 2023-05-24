// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const withImages = require('next-images')
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const withCSS = require('@zeit/next-css')

// module.exports = withCSS(
//     withImages({
//         // enableSvg: true,
//         webpack(config, options) {
//             return config
//         },
//     }),
// )

// https://stackoverflow.com/questions/65487914/error-image-optimization-using-next-js-default-loader-is-not-compatible-with-n
module.exports = {
    images: {
        unoptimized: true,
    },
}
