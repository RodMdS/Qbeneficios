module.exports.carrer_path = function(application, request, response){
    response.render('forms/register_career_path', {validation: {}, formData: {}});
}

module.exports.register_career_path = function(application, request, response){
    var formData = request.body;
    var errors = request.validationErrors();

    if(errors){
        response.render('register_career_path', {validation: errors, formData: formData});
        return;
    }

    var carrerPathDAO = new application.src.models.carrerPathDAO(request);
    carrerPathDAO.insertCarrerPath(formData);
    response.redirect('/');
}