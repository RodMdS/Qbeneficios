class CarrerPathDAO {
    constructor(request){
        this._request = request;
    }
}

CarrerPathDAO.prototype.insertCarrerPath = function(carrerPath){
    this._request.db.collection("CarrerPaths", function(error, collection){
        collection.insert(carrerPath);
    });
}

module.exports = function(){
    return CarrerPathDAO;
}