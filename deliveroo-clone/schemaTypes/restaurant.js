// schemas/pet.js
export default {
    name: 'restaurant',
    type: 'document',
    title: 'Restaurant',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Restaurant Name',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'short_description',
        type:'string',
        title: 'Short Description',
        validation: (Rule) => Rule.max(200),
      },
      {
        name: 'image',
        type:'image',
        title: 'Image for Restaurant',
      },
      {
        name: 'lat',
        type:'number',
        title: 'Latitude for the Restaurant',
      },
      {
        name: 'long',
        type:'number',
        title: 'Longitude for the Restaurant',
      },
      {
        name: 'address',
        type:'string',
        title: 'Restaurant address',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Enter a Rating from (1-5 Stars)',
        validation: (Rule) => 
           Rule.required()
           .min(1)
           .max(5)
           .error("Please enter a value between 1 and 5"),
      },
      {
        name: 'type',
        title: 'Category',
        validation: (Rule) => Rule.required(),
        type:'reference',
        to: [{ type: 'category' }],
      },
      {
        name: 'dishes',
        type: 'array',
        title: 'Dishes',
        of: [{ type: 'reference', to: [{ type: 'dish' }] }],
      }
    ]
  }