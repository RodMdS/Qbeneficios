module.exports = function(application){
    application.get('/', function(request, response){
        application.src.controllers.home.index(application, request, response);
    });
}