import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Ashot',
            email: 'r@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'Richard',
            email: 'R@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },
        
    ],
    products: [
        {
            name:"Nike Slim shirt",
            slug: "nike-slim-shirt",
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock:10,
            brand:'nike',
            rating:4.5,
            numReview:10,
            description: 'high quality product',
        },
        {
            name:"Adidas Slim shirt",
            slug: "adida-slim-shirt",
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 120,
            countInStock:10,
            brand:'Adidas',
            rating:5,
            numReview:30,
            description: 'high quality product',
        },
        {
            name:"Puma Slim shirt",
            slug: "Puma-slim-shirt",
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 120,
            countInStock:10,
            brand:'Puma',
            rating:4,
            numReview:20,
            description: 'high quality product',
        }
        ,
        {
            name:"Fifa Slim shirt",
            slug: "fifa-slim-shirt",
            category: 'Shirts',
            image: '/images/p4.jpg',
            price: 240,
            countInStock: 0,
            brand:'Fifa',
            rating:4.8,
            numReview:15,
            description: 'high quality product',
        }
    ]
}
export default data;