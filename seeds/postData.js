const { Post } = require('../models')

const postData = [
    {
        "title": "Why MVC is so important",
        "content": "It's all about separation of concerns! You have the Model layer for data, the View layer for design, and the Controller layer for application logic. It is important to have separate code so each part has a meaningful and intuitive role while still being able adapt to change.",
        "date_created": "03/30/2021",
        "user_id": 1
    },
    {
        "title": "Authentication vs. Authorization",
        "content": "There is a difference between authentication and authorization. Authentication is confirming your own identity, while authorization is being allowed access to something.",
        "date_created": "03/29/2021",
        "user_id": 3
    },
    {
        "title": "What is an ORM?",
        "content": "ORM stands for object relational mapper. It uses models to organize and access data. As a code-first model, you can write a database by writing the structure, then the ORM will create the tables and keys for you. It also abstracts database queries so that you don't have to write your own queries in a specific database language. It can really simplify the way you create queries in SQL!",
        "date_created": "03/29/2021",
        "user_id": 4
    },
    {
        "title": "I am skeptical",
        "content": "I am never sure something will work until I test it out multiples times. Even then, I am sometimes surprised to find it working.",
        "date_created": "03/31/2021",
        "user_id": 4
    },
]

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;