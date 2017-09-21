/**
 * Created by kevinzhou on 11/10/16.
 */
var userAnswers = [];


// js file scripts
var idToJSMap = {
    "AuditQuestionnaireAlcohol" : "../js/AuditQuestionnaireAlcoholMisuseService.js",
    "PHQ9" : "../js/PHQ9Service.js"
};

function loadjsfile(filename){
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("src", filename);

    if (typeof fileref!="undefined"){
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }
}


function submit() {
    resetSurveyResults();
    var isValid = retrieveResultsWithValidation();
    console.log(userAnswers);
    if (isValid) {
        //AuditQuestionnaireAlcohol to Audit Questionnaire AlocholMisuse
        AnalysisFromPatientAnswers(userAnswers);
        writeToFile(userAnswers);
        savePDF(localStorage.getItem('surveyId'), lastName, firstName);
        openFile();
        reset();
    }
    else {
        alert("Please fill out all answer choices");
        selectedAnswerCount =0;
        resetSurveyResults();
    }

}

var selectedAnswerCount = 0;


function retrieveResultsWithValidation() {
    userAnswers = [];

    var allQuestions = document.getElementsByClassName('question-text');
    var allAnswers = document.getElementsByClassName('answer-text');


    for (var counter = 0; counter < allAnswers.length; counter++)
    {
        if (allAnswers[counter].tagName =="INPUT" && allAnswers[counter].type === "radio" &&
            allAnswers[counter].checked) {

            userAnswers.push(allAnswers[counter]);
        }
    }


    if (allQuestions.length != userAnswers.length) {
        allQuestions = allAnswers = userAnswers = [];
        return false;
    }

    else {

        for (var counter = 0 ;counter< userAnswers.length -1; counter++) {
            addSurveyResult(allQuestions[counter].innerText ,userAnswers[counter].parentNode.innerText);
        }
        addSurveyResultAndSave(allQuestions[counter].innerText, userAnswers[counter].parentNode.innerText);

        return true;
    }

}






