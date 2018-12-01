var mongoose = require('mongoose');

var evalFormSchema = mongoose.Schema({
    date:{
        type: Date,
        default: Date.now
    },
    evaluatorName:{
        type: String,
        required : true
    },
    projectName:{
        type: String,
        required : true
    },
    document_wellexplained_Rating: {
        type: Number,
        required: true
    },
    workload_justified_Rating: {
        type: Number,
        required: true
    },
    quantitative_specs_Rating: {
        type: Number,
        required: true
    },
    proofOfConcept_Rating: {
        type: Number,
        required: true
    },
    potential_contribution_Rating: {
        type: Number,
        required: true
    },
    suggestions: {
        type: String
    }
});

var EvalForm = module.exports = mongoose.model('Results',evalFormSchema);

module.exports.getResults = function(callback,limit){
    EvalForm.find(callback).limit(limit);
}

module.exports.addResult = function(result, callback){
    EvalForm.create(result,callback);
}

module.exports.deleteResult = function(id, callback){
    var query = {_id: id};
    EvalForm.remove(query,callback);
}