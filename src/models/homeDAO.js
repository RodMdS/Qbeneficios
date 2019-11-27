class HomeDAO {
    constructor(request){
        this._request = request;
    }
}

HomeDAO.prototype.get_highest_salary = function(response){
    this._request.db.collection("Collaborators", function(error, collection){
        collection.aggregate([
            {
                '$group': {'_id': 1, 'salary': {'$max': "$salary"}, 'count': {'$sum': 1}}
            }
        ]).toArray(function(error, result){
            response.render('home/index', {message: '', flag: '', collaborator: result});
        });
    });


/*        collection.find().sort({'salary':-1}).limit(1).toArray(function(error, result){

            response.render('home/index', {message: '', flag: '', collaborator: result});
        });
    });
*/
//    response.render('home/index', {message: '', flag: '', collaborator: highest_salary, count: count_collaborator});

}

module.exports = function(){
    return HomeDAO;
}