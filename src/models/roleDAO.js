class RoleDAO {
    constructor(request){
        this._request = request;
    }
}

RoleDAO.prototype.insertRole = function(role){
    this._request.db.collection("Roles", function(error, collection){
        collection.insert(role);
    });
}

RoleDAO.prototype.getRolesByPathName = function(path, response) {
    this._request.db.collection("Roles", function(error, collection) {
        collection.find({"path_name": path.name}).toArray(function(err, results) {
            console.log("roles: %s", JSON.stringify(results));
            response.render("home/show_carrer_path", {path: path, roles: results});
        });
    });
}

module.exports = function(){
    return RoleDAO;
}