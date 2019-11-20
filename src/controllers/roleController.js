module.exports.role = function(application, request, response){
    response.render('forms/register_role', {validation: {}, formData: {}});
}

module.exports.register_role = function(application, request, response){
    var formData = request.body;
    var errors = request.validationErrors();

    if(errors){
        response.render('register_role', {validation: errors, formData: formData});
        return;
    }

    var collaboratorDAO = new application.src.models.roleDAO(request);
    collaboratorDAO.insertRole(formData);
    response.redirect('/');
}