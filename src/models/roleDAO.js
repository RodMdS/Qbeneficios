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

RoleDAO.prototype.getRolesByPathId = function(path, response) {
    this._request.db.collection("Roles", function(error, collection) {
        collection.find({"path_id": path._id}).toArray(function(err, results) {
            console.log("Roles: %s", JSON.stringify(results));
            response.render("forms/register_career_path?", {validation: id, formData: path});
        });
    });
}

RoleDAO.prototype.getRolesByPathName = function(path, tag, response) {
    this._request.db.collection("Roles", function(error, collection) {
        collection.find({"path_id": path._id}).toArray(function(err, results) {
            var temp_aux = '';
            if(tag === 'del'){
                temp_aux = 'forms/remove_carrer_path';
            } else {
                temp_aux = 'forms/update_carrer_path';
            }
            console.log("Roles: %s", JSON.stringify(results));
            response.render(temp_aux, {path: path, roles: results});
        });
    });
}

module.exports = function(){
    return RoleDAO;
}