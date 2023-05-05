require('dotenv').config();

const app = require('./app');

const { dbUsers } = require('./database/users.config');
const { dbMeals } = require('./database/meals.config');
const { dbOrders } = require('./database/orders.config');
const { dbRestaurants } = require('./database/restaurants.config');
const { dbReviews } = require('./database/reviews.config');
const initModel = require('./models/initModels');

dbUsers.authenticate()
.then(() => {
    console.log('database authenticated')
})
.catch(error => console.log(error))

initModel();

dbUsers.sync()
.then(() => {
    console.log('database synced')
})
.catch(error => console.log(error))

dbMeals.authenticate()
.then(() => {
    console.log('database authenticated')
})
.catch(error => console.log(error))
dbMeals.sync()
.then(() => {
    console.log('database synced')
})
.catch(error => console.log(error))

dbOrders.authenticate()
.then(() => {
    console.log('database authenticated')
})
.catch(error => console.log(error))
dbOrders.sync()
.then(() => {
    console.log('database synced')
})
.catch(error => console.log(error))

dbRestaurants.authenticate()
.then(() => {
    console.log('database authenticated')
})
.catch(error => console.log(error))
dbRestaurants.sync()
.then(() => {
    console.log('database synced')
})
.catch(error => console.log(error))

dbReviews.authenticate()
.then(() => {
    console.log('database authenticated')
})
.catch(error => console.log(error))
dbReviews.sync()
.then(() => {
    console.log('database synced')
})
.catch(error => console.log(error))

const port = process.env.PORT || 3015;
app.listen(port, () => {
    console.log(`App running on port ${port}`)
})