const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Please enter product description']
    },
    price: {
        type: Number,
        required: [true, 'Please enter the price'],
        maxLength: [8, 'Price can not exceed 8 characters']
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'Please enter product category']
    },
    stock: {
        type: Number,
        required: [true, 'Please enter product stock'],
        maxLength: [true, 'Stock can not exceed 4 characters'],
        default: 1
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        res: 'User',
        required: true
    },
    cratedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = new mongoose.model('Product', productSchema);
