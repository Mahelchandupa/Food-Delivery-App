import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
  projectId: '8timlqf1', // you can find this in your sanity.json
  dataset: 'production', // or the name of your dataset
  useCdn: true // `false` if you want to ensure fresh data
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;