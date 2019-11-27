module.exports = function(application){
    application.get('/update_carrer_path', function(request, response) {
        application.src.controllers.updateCarrerPathController.update_carrer_path(application, request, response);
    });

    application.post('/search_path', function(request, response) {
        application.src.controllers.updateCarrerPathController.get_carrer_path_by_name(application, request, response);
    });

    application.post('/update_path', function(request, response) {
        application.src.controllers.carrerPathController.update_career_path(application, request, response);
    });
}