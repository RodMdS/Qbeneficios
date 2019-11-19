module.exports.index = function(aplication, request, response){
    response.render('home/index', {message: '', flag: ''});
}