export default {
    name: 'featured',
    title: 'Featured Menu Category',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Featured Category Name',
            type:'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'short_description',
            title: 'Short Description',
            type: 'string',
            validation: (Rule) => Rule.max(200)
        },
        {
            name: 'restaurants',
            title: 'Restaurants',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'restaurant'}] }]
        }
    ]
}