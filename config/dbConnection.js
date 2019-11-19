var mongo = require('mongodb');

var mongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/qbeneficios";

var conn = function(){
    var client = mongoClient.connect(url, { useNewUrlParser: true });
    return client;
}

module.exports = function(){
    return conn;
}