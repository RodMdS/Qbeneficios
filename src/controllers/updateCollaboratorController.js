module.exports.update_collaborator = function(application, request, response){
    response.render('forms/update_collaborator', {list: []});
}

module.exports.get_collaborator_by_name = function(application, request, response){
    var formData = request.body;
    var tag = request.query.tag;

    var update_coll = new application.src.models.collaboratorDAO(request);
    update_coll.getCollaborator_by_name(formData.name, tag, response);
}

module.exports.get_collaborator_by_id = function(application, request, response){
    var id = request.query.id;
    var update_coll = new application.src.models.collaboratorDAO(request);
    update_coll.getCollaborator_by_id(id, response);
}