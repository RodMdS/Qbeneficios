module.exports.carrer_path = function(application, request, response) {
    response.render('forms/register_career_path', {validation: {}, formData: {}});
}

module.exports.getCarrerPaths = function(application, request, response) {
    var carrerPathDAO = new application.src.models.carrerPathDAO(request);
    carrerPathDAO.getAllCarrerPath(response);
}

module.exports.getPathById = function(application, request, response) {
    var carrerPathDAO = new application.src.models.carrerPathDAO(request);
    var path_id = request.body.id;
    carrerPathDAO.getPathById(path_id, response);
}

module.exports.register_career_path = function(application, request, response) {
    var formData = request.body;
    var errors = request.validationErrors();

    if(errors) {
        response.render('register_career_path', {validation: errors, formData: formData});
        return;
    }

    var carrerPathDAO = new application.src.models.carrerPathDAO(request);
    carrerPathDAO.insertCarrerPath(formData);
    response.redirect('/');
}

module.exports.update_career_path = function(application, request, response) {
    var id = request.query.id;
    var formData = request.body;
    console.log("formData: %s", JSON.stringify(formData));
    var errors = request.validationErrors();

    if(errors) {
        response.render('register_career_path', {validation: errors, formData: formData});
        return;
    }

    var carrerPathDAO = new application.src.models.carrerPathDAO(request);
    carrerPathDAO.updateCarrerPath(id, formData);
    response.redirect('/');
}