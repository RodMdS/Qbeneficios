module.exports = function(application){
    application.get('/update_collaborator', function(request, response){
        application.src.controllers.updateCollaboratorController.update_collaborator(application, request, response);
    });

    application.post('/search', function(request, response){
        application.src.controllers.updateCollaboratorController.get_collaborator_by_name(application, request, response);
    });

    application.get('/update_coll', function(request, response){
        application.src.controllers.updateCollaboratorController.get_collaborator_by_id(application, request, response);
    });
}