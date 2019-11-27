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

CarrerPathDAO.prototype.updateCarrerPath = function(id, carrerPath) {
    this._request.db.collection("CarrerPaths", function(error, collection) {
        collection.update({'_id': id}, carrerPath, {upsert: true});
    });
}

CarrerPathDAO.prototype.getAllCarrerPath = function(response) {
    this._request.db.collection('CarrerPaths', function(error, collection) {
        collection.find({}).toArray(function(err, results) {
            console.log("Paths: %s", JSON.stringify(results));
            response.render("forms/register_role", {validation: {}, formData: {}, paths: results});
        });
    });
}

CarrerPathDAO.prototype.getPathById = function(id, application, request, response) {
    this._request.db.collection('CarrerPaths', function(error, collection) {
        collection.find({'_id': id}).toArray(function(err, results) {            
            var path = results;
            console.log("Path: %s", JSON.stringify(path));
            var roleDAO = new application.src.models.roleDAO(request);
            roleDAO.getRolesByPathId(path, response);
        });
    });
}

CarrerPathDAO.prototype.getCarrerPathByName = function(name, tag, application, request, response) {
    this._request.db.collection("CarrerPaths", function(error, collection) {
        var myRegex = new RegExp("^" + name);
        collection.find({"name": {"$regex": myRegex}}).toArray(function(err, results) {
            var returned_path = results;
            console.log("Path: %s", JSON.stringify(returned_path));
            var roleDAO = new application.src.models.roleDAO(request);
            roleDAO.getRolesByPathName(returned_path, tag, response);
        });
    });
}

module.exports = function() {
    return CarrerPathDAO;
}