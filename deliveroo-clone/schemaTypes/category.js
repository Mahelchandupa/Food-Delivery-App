export default {
    name: 'category',
    title: 'Menu Category',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Category Name',
            type:'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'image',
            title: 'Image of Category',
            type: 'image',
        }
    ]
}