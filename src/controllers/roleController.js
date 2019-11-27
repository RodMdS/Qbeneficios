module.exports.role = function(application, request, response) {
    application.src.controllers.carrerPathController.getCarrerPaths(application, request, response);
}

module.exports.register_role = function(application, request, response){
    console.log(request.body);
    var formData = {"name": request.body.name,
                    "description": request.body.description,
                    "main_task": request.body.main_task,
                    "salary": request.body.salary,
                    "main_benefit": request.body.main_benefit,
                    "path_id": request.body.carrer_path};
    var errors = request.validationErrors();

    if(errors){
        response.render('register_role', {validation: errors, formData: formData});
        return;
    }

    var collaboratorDAO = new application.src.models.roleDAO(request);
    collaboratorDAO.insertRole(formData);
    response.redirect('/');
}