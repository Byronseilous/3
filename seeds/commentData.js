const { Comment } = require('../models')

const commentData = [
    {
        "content": "Bonus: it triples your application's number of files.",
        "date_created": "03/31/2021",
        "user_id": 2,
        "post_id": 1
    },
    {
        "content": "This is an inappropriate comment that will still be displayed because there are no checks in place.",
        "date_created": "03/29/2021",
        "user_id": 2,
        "post_id": 2
    },
    {
        "content": "Just learned Sequelize in class. This makes queries with joins so much easier!",
        "date_created": "03/30/2021",
        "user_id": 1,
        "post_id": 3
    },
    {
        "content": "Aren't we always skeptical?",
        "date_created": "04/01/2021",
        "user_id": 3,
        "post_id": 4
    },
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;