class CarrerPathDAO {
    constructor(request) {
        this._request = request;
    }
}

CarrerPathDAO.prototype.insertCarrerPath = function(carrerPath) {
    this._request.db.collection("CarrerPaths", function(error, collection) {
        collection.insert(carrerPath);
    });
}

CarrerPathDAO.prototype.getAllCarrerPath = function(response) {
    this._request.db.collection('CarrerPaths', function(error, collection) {
        collection.find({}).toArray(function(err, results) {
            response.render("forms/register_role", {validation: {}, formData: {}, paths: JSON.stringify(results)});
        });
    });
}

CarrerPathDAO.prototype.getPathById = function(id, response) {
    this._request.db.collection('CarrerPaths', function(error, collection) {
        collection.find({'_id': ObjectId(id)}).toArray(function(err, results) {            
            var path = results[0];
            console.log("Path: %s", path);
            var roleDAO = new application.src.models.roleDAO(request);
            roleDAO.getRolesByPathName(path, response);
            //response.render("forms/register_role", {validation: {}, formData: {}, paths: JSON.stringify(results)});
        });
    });
}

module.exports = function() {
    return CarrerPathDAO;
}