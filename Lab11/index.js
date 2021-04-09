//importing mongodb
import MongoClient from "mongodb";

//my url login
const URL = "mongodb+srv://tthompson:4ve9uR6qGd9EGnkj@cluster0.oewwc.mongodb.net/";

//making all the connections and defining the search parameters
MongoClient.connect(URL, {useUnifiedTopology: true})
.then(connection =>{
    let database = connection.db("sample_airbnb");

    let collection = database.collection("listingsAndReviews");

    let cursor = collection.find({beds: {$gte: 5}}, {price: {$lte: 200}}, {"review_scores.review_score_rating": {$gte: 99 }});

//closing the search
    cursor.forEach(document => {
        console.log(document.name);
    }, () =>{
        connection.close();
    })
})
//catching errors
.catch(error =>{
    console.log("Error: " + error);
});
