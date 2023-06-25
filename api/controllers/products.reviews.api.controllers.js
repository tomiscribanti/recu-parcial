import * as service from '../../services/products.reviews.services.js'

function getReviews(req, res) {
    const idProduct = req.params.idProduct

    service.getReviews(idProduct)
        .then(function (reviews) {
            if (reviews) {
                res.json(reviews)
            }
            else {
                res.json({ product_id: idProduct, reviews: [] })
            }
        })
}


function createReview(req, res) {

    const idProduct = req.params.idProduct

    const review = {
        comment: req.body.comment,
        author: req.body.author,
        date: new Date(),
        score: parseInt(req.body.score)
    }

    service.createReview(idProduct, review)
        .then(function (data) {
            res.json({ message: "La review fue generada correctamente." })
        })
}

export {
    getReviews,
    createReview
}