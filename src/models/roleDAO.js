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

module.exports = function(){
    return RoleDAO;
}