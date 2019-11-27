module.exports.register = function(application, request, response){
    response.render('forms/register_collaborator', {validation: {}, formData: {}});
}

module.exports.register_collaborator = function(application, request, response){
    var formData = request.body;
    var id = request.query.id;
    var errors = request.validationErrors();

    if(errors){
        response.render('register_collaborator', {validation: errors, formData: formData});
        return;
    }

    var collaboratorDAO = new application.src.models.collaboratorDAO(request);
    collaboratorDAO.insertCollaborator(id, formData);
    response.redirect('/');
    //, {message: 'Colaborador Cadastrado com Sucesso!', flag: 'colab'}
}

module.exports.remove_collaborator = function(application, request, response){
    response.render('forms/remove_collaborator', {list: []});
}