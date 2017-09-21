/**
 * Created by kevinzhou on 11/10/16.
 */

//Stores Data using local storage

function QuestionAnswer(question, answer){
    this.question = question;
    this.answer = answer;
}

//todo transform this into a json object, trasform it back into parse
QuestionAnswer.prototype.toString = function() {
    return  '{\"question\": \"'   +this.question  + "\", " + '\"answer\": \"' + this.answer + '\"}';
};

var firstName = localStorage.getItem('firstName');
var lastName = localStorage.getItem('lastName');
var DOB = localStorage.getItem('DOB');



//HAVE TO MAKE THIS JSON OBJECT
var _surveyResults = [];




function addSurveyResult(surveyQuestion, surveyAnswer) {
    _surveyResults.push(new QuestionAnswer(surveyQuestion, surveyAnswer));
}

function addSurveyResultAndSave(surveyQuestion, surveyAnswer) {
    _surveyResults.push(new QuestionAnswer(surveyQuestion,surveyAnswer));
    localStorage.setItem('surveyResults', _surveyResults.toString());
}



function resetSurveyResults(){
    _surveyResults = [];
}


function resetAll() {
    localStorage.clear();
    firstName = lastName = DOB ='';
    _surveyResults =[];
}

function getSurveyResults() {
    return JSON.parse('[' + localStorage.getItem('surveyResults') + ']');
}