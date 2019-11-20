module.exports = function(application){
    application.get('/register_role', function(request, response){
        application.src.controllers.roleController.role(application, request, response);
    });

    application.post('/register_role', function(request, response){
        application.src.controllers.roleController.register_role(application, request, response);
    });
}