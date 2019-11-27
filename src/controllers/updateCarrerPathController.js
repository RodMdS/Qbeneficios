module.exports.update_carrer_path = function(application, request, response){
    response.render('forms/update_carrer_path', {path: {}, roles: []});
}

module.exports.get_carrer_path_by_name = function(application, request, response){
    var formData = request.body;
    var tag = request.query.tag;
    var update_path = new application.src.models.carrerPathDAO(request);
    update_path.getCarrerPathByName(formData.name, tag, application, request, response);
}

module.exports.get_carrer_path_by_id = function(application, request, response){
    var id = request.query.id;
    console.log("Path_id: %s", id);
    var update_path = new application.src.models.carrerPathDAO(request);
    update_path.getPathById(id, application, request, response);
}