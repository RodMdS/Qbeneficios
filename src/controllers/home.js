module.exports.index = function(application, request, response){
    var homeDAO = new application.src.models.homeDAO(request);
    homeDAO.get_highest_salary(response);    
}