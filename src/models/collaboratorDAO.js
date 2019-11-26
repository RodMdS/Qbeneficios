const {ObjectId} = require('mongodb');

class CollaboratorDAO {
    constructor(request) {
        this._request = request;
    }
}

CollaboratorDAO.prototype.insertCollaborator = function(id, collaborator){
    this._request.db.collection("Collaborators", function(error, collection){
        collection.update({'_id': ObjectId(id)}, collaborator, {upsert: true});
    });
}

CollaboratorDAO.prototype.getCollaborator_by_name = function(name, response){
    this._request.db.collection("Collaborators", function(error, collection){
        var myRegex = new RegExp("^" + name);
        collection.find({"name": {"$regex": myRegex}}).toArray(function(errors, result){
            response.render('forms/update_collaborator', {list: result});
        });
    });
}

CollaboratorDAO.prototype.getCollaborator_by_id = function(id, response){
    this._request.db.collection("Collaborators", function(error, collection){
        collection.find({'_id': ObjectId(id)}).toArray(function(errors, result){
            response.render('forms/register_collaborator', {validation: id, formData: result});
        });
    });
}

module.exports = function(){
    return CollaboratorDAO;
}

