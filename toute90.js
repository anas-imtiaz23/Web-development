// inserting the data in the mongo db 
use harrykart
db.items.insertOne({name:"samsung",price:22000,rating:4.5,qty:233,old:98})
// db.items.insertOne({name:"samsung",price:22000,rating:4.5,qty:233,old:98})
db.items.insertMany([{name:"samsung",price:22000,rating:4.5,qty:233,old:98},{
    name:"iphone",model:15,price:50000,qty:23,sold:12
}])
// this is the query to the the weather it is greater than or equal to the price 

db.items.find({price:{$gte:22000}})
// this is the query to check that weather it is the price which is equal to or samll than the given price 
db.items.find({price:{$lte:22000}})
// no this is used to check wheather the given value is excepted or the other one is excepted from the option 
db.items.find({$or:[{rating:{$gt:3.5}},{price:{$gt:22000}}]})
// now for checking the specific fields 
db.items.find({rating:{$gt:3.5}},{rating:1})
// this is the syntax that is used for tthe purpose of deleting the items from the database 
show dbs 
show collections
db.items.find()
db.items.deleteOne({price:22000})
// this query will delete the first item from the list if there exist the multiple items 
db.items.deleteMany({price:220000})
this query will delete all the items from the list which contain the price 220000
// now this is the updating section of the database who we can update the items 
db.anothercollection.insertOne({a:89})
// this is for the making another collection in the database 
// the name of the first collection is the item and the name of the another collection is the anothercollection 
show collections
// is used to see the how many collections are presnt on the database 
// this is used for updating the dataset values 
db.items.updateOne({name:"infinix"},{$set:{price:10000}})
db.items.updateMany({name:"infinix"},{$set:{price:20000,sold:200}})