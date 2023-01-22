// sectors has been uploaded to database from here
// data structure here is same as database
// this variable is currently unused but kept it for reference

const AllSectors = [
    {
        id: 1,
        categoryName: 'Manufacturing',
        sectors: [
            { id: 19, name: 'Construction materials' },
            { id: 18, name: 'Electronics and Optics' }
        ],
        subCategories: [
            {
                id: 6,
                categoryName: 'Food and Beverage',
                sectors: [
                    { id: 342, name: 'Bakery & confectionery products' },
                    { id: 43, name: 'Beverages' },
                    { id: 42, name: 'Fish & fish products' },
                    { id: 40, name: 'Meat & meat products' },
                    { id: 39, name: 'Milk & dairy products' },
                    { id: 437, name: 'Other' },
                    { id: 378, name: 'Sweets & snack food' }
                ]
            },
            {
                id: 13,
                categoryName: 'Furniture',
                sectors: [
                    { id: 389, name: 'Bathroom/sauna' },
                    { id: 385, name: 'Bedroom' },
                    { id: 390, name: "Children's room" },
                    { id: 98, name: 'Kitchen' },
                    { id: 101, name: 'Living room' },
                    { id: 392, name: 'Office' },
                    { id: 394, name: 'Other (Furniture)' },
                    { id: 341, name: 'Outdoor' },
                    { id: 99, name: 'Project furniture' }
                ]
            },
            {
                id: 12,
                categoryName: 'Machinery',
                sectors: [
                    { id: 94, name: 'Machinery components' },
                    { id: 91, name: 'Machinery equipment/tools' },
                    { id: 224, name: "Manufacture of machinery" },
                    { id: 93, name: 'Metal structures' },
                    { id: 508, name: 'Other' },
                    { id: 227, name: 'Repair and maintenance service' }
                ],
                subCategories: [
                    {
                        id: 97,
                        categoryName: 'Maritime',
                        sectors: [
                            { id: 271, name: 'Aluminium and steel workboats' },
                            { id: 269, name: 'Boat/Yacht building' },
                            { id: 230, name: "Ship repair and conversion" }
                        ],
                    }
                ]
            },
            {
                id: 11,
                categoryName: 'Metalworking',
                sectors: [
                    { id: 67, name: 'Construction of metal structures' },
                    { id: 263, name: 'Houses and buildings' },
                    { id: 267, name: 'Metal products' },
                ],
                subCategories: [
                    {
                        id: 542,
                        categoryName: 'Metal works',
                        sectors: [
                            { id: 75, name: 'CNC-machining' },
                            { id: 62, name: 'Forgings, Fasteners ' },
                            { id: 69, name: 'Gas, Plasma, Laser cutting' },
                            { id: 66, name: 'MIG, TIG, Aluminum welding' },
                        ],
                    }
                ]
            },
            {
                id: 5,
                categoryName: 'Printing',
                sectors: [
                    { id: 148, name: 'Advertising' },
                    { id: 150, name: 'Book/Periodicals printing' },
                    { id: 145, name: 'Labelling and packaging printing' },
                ]
            },
            {
                id: 9,
                categoryName: 'Plastic and Rubber',
                sectors: [
                    { id: 54, name: 'Packaging' },
                    { id: 556, name: 'Plastic goods' },
                    { id: 560, name: 'Plastic profiles' },
                ],
                subCategories: [
                    {
                        id: 9,
                        categoryName: 'Plastic and Rubber',
                        sectors: [
                            { id: 559, name: 'Plastic processing technology' },
                            { id: 55, name: 'Blowing' },
                            { id: 57, name: 'Moulding' },
                            { id: 53, name: 'Plastics welding and processing' },
                        ]
                    }
                ]
            },
            {
                id: 8,
                categoryName: 'Wood',
                sectors: [
                    { id: 337, name: 'Other (Wood)' },
                    { id: 51, name: 'Wooden building materials' },
                    { id: 47, name: 'Wooden houses' },
                ]
            },
            {
                id: 7,
                categoryName: 'Textile and Clothing',
                sectors: [
                    { id: 44, name: 'Clothing' },
                    { id: 45, name: 'Textile' },
                ]
            },
        ]
    },
    {
        id: 3,
        categoryName: 'Other',
        sectors: [
            { id: 37, name: 'Creative industries' },
            { id: 29, name: 'Energy technology' },
            { id: 33, name: 'Environment' }
        ],
    },
    {
        id: 2,
        categoryName: 'Service',
        sectors: [
            { id: 22, name: 'Tourism' },
            { id: 141, name: 'Translation services' },
            { id: 25, name: 'Business services' },
            { id: 35, name: 'Engineering' }
        ],
        subCategories: [
            {
                id: 21,
                categoryName: 'Transport and Logistics',
                sectors: [
                    { id: 111, name: 'Air' },
                    { id: 114, name: 'Rail' },
                    { id: 112, name: 'Road' },
                    { id: 113, name: 'Water' }
                ]
            },
            {
                id: 28,
                categoryName: 'Information Technology and Telecommunications',
                sectors: [
                    { id: 581, name: 'Data processing, Web portals, E-marketing' },
                    { id: 576, name: 'Programming, Consultancy' },
                    { id: 121, name: 'Software, Hardware' },
                    { id: 122, name: 'Telecommunications' },
                ]
            },
        ]
    }
]
export default AllSectors