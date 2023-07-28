const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
    space: space,
    accessToken: accessToken,
})

export const getMainSlides = async () => {
    const entries = await client.getEntries({
        content_type: 'mainSlider',
        select: 'fields.titile,fields.subtitle,fields.image,fields.link'
    })
    if (entries.items) {
        return entries.items;
    }
    console.error("Could not fetch blog posts!")
}

export const getTrainings = async () => {
    const entries = await client.getEntries({
        content_type: 'variants',
        select: 'fields.shedule,fields.title,fields.subtitle,fields.coachs,fields.link'
    })
    if (entries.items) {
        return entries.items;
    }
    console.error("Could not fetch blog posts!")
}