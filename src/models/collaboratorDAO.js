class CollaboratorDAO {
    constructor(request) {
        this._request = request;
    }
}

CollaboratorDAO.prototype.insertCollaborator = function(collaborator){
    this._request.db.collection("Collaborators", function(error, collection){
        collection.insert(collaborator);
    });
}

module.exports = function(){
    return CollaboratorDAO;
}

