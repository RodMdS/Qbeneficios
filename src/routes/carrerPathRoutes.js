module.exports = function(application) {
    application.get('/register_career_path', function(request, response) {
        application.src.controllers.carrerPathController.carrer_path(application, request, response);
    });
    /*application.post('/show_career_path', function(request, response) {
        application.src.controllers.carrerPathController.getPathById(application, request, response);
    });*/
    application.post('/register_career_path', function(request, response) {
        application.src.controllers.carrerPathController.register_career_path(application, request, response);
    });
}