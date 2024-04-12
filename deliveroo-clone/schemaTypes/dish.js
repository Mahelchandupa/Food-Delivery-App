export default {
    name: 'dish',
    title: 'Dish',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name of Dish',
            type:'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'short_description',
            title: 'Short Description',
            type: 'string',
            validation: (Rule) => Rule.max(200),
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price of the dish GBP',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image of the Dish',
        }
    ]
}