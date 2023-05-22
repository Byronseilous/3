const { User } = require('../models');

const userData = [
    {
        "name": "John Doe",
        "email": "DoeRayMi@fakemail.com",
        "password": "password1234"
    },
    {
        "name": "Chris Jacobs",
        "email": "CJacobs458@fakemail.com",
        "password": "password1234"
    },
    {
        "name": "Holly Benson",
        "email": "ButterYellow123@fakemail.com",
        "password": "password1234"
    },
    {
        "name": "Yennifer Vangeberg",
        "email": "BestMageEver@fakemail.com",
        "password": "password1234"
    },
    {
        "name": "Geralt Rivia",
        "email": "Witcher999@fakemail.com",
        "password": "password1234"
    }
];

const seedData = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedData;