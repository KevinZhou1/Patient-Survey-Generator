/**
 * Created by kevin on 11/29/16.
 */
var auditQuestionnaireAlcoholMisuseData = [{type: 'Gender'},{'type': 'PointsMC' ,'question': 'How often do you ' +
'have a drink containing alcohol?', 'answers' : [{
    'text': 'Never', 'value' : 0 }, {'text' : 'Monthly or less', 'value': 1}, {'text' : '2-4 times a month', 'value': 2},
    {'text' : '2-3 times a week', 'value': 3}, {'text' : '4 or more times a week', 'value': 4}]}, {
    'type': 'PointsMC', 'question' : 'How many standard drinks containing alcohol do you have on a typical day when drinking?',
    'answers' : [{
    'text': 'Never', 'value' : 0 }, {'text' : 'Monthly or less', 'value': 1}, {'text' : '2-4 times a month', 'value': 2},
    {'text' : '2-3 times a week', 'value': 3}, {'text' : '4 or more times a week', 'value': 4}]}, {'type' : 'PointsMC',
    'question': 'How often do you have six or more drinks on one occasion?', 'answers' : [{
        'text': 'Never', 'value' : 0 }, {'text' : 'Monthly or less', 'value': 1}, {'text' : '2-4 times a month', 'value': 2},
        {'text' : '2-3 times a week', 'value': 3}, {'text' : '4 or more times a week', 'value': 4}]}, {type: 'PointsMC',
    'question' : 'During the past year, how often did you find that you were not able to stop drinking once you started?',
    'answers' : [{
        'text': 'Never', 'value' : 0 }, {'text' : 'Monthly or less', 'value': 1}, {'text' : '2-4 times a month', 'value': 2},
        {'text' : '2-3 times a week', 'value': 3}, {'text' : '4 or more times a week', 'value': 4}]},{type: 'PointsMC',
    'question' : 'During the past year, how often have you failed to do what was normally expected of you because of drinking?',
    'answers' : [{
        'text': 'Never', 'value' : 0 }, {'text' : 'Monthly or less', 'value': 1}, {'text' : '2-4 times a month', 'value': 2},
        {'text' : '2-3 times a week', 'value': 3}, {'text' : '4 or more times a week', 'value': 4}]},{type: 'PointsMC',
    'question' : 'During the past year, how often have you needed a drink in the morning to get yourself going after a heavy drinking session?',
    'answers' : [{
        'text': 'Never', 'value' : 0 }, {'text' : 'Monthly or less', 'value': 1}, {'text' : '2-4 times a month', 'value': 2},
        {'text' : '2-3 times a week', 'value': 3}, {'text' : '4 or more times a week', 'value': 4}]},{type: 'PointsMC',
    'question' : 'During the past year, how often have you had a feeling of guilt or remorse after drinking?',
    'answers' : [{
        'text': 'Never', 'value' : 0 }, {'text' : 'Monthly or less', 'value': 1}, {'text' : '2-4 times a month', 'value': 2},
        {'text' : '2-3 times a week', 'value': 3}, {'text' : '4 or more times a week', 'value': 4}]},{type: 'PointsMC',
    'question' : 'During the past year, have you been unable to remember what happened the night before because you had been drinking?',
    'answers' : [{
        'text': 'Never', 'value' : 0 }, {'text' : 'Monthly or less', 'value': 1}, {'text' : '2-4 times a month', 'value': 2},
        {'text' : '2-3 times a week', 'value': 3}, {'text' : '4 or more times a week', 'value': 4}]},{type: 'PointsMC',
    'question' : 'Have you or someone else been injured as a result of your drinking?',
    'answers' : [{
        'text': 'No', 'value' : 0 },  {'text' : 'Yes but not in the past year', 'value': 2},
        {'text' : 'Yes, during the past year', 'value': 4}]},{type: 'PointsMC',
    'question' : 'Has a relative or friend, doctor or other health worker been concerned about you drinking or suggested you cut down?',
    'answers' : [{
        'text': 'Never', 'value' : 0 }, {'text' : 'Monthly or less', 'value': 1}, {'text' : '2-4 times a month', 'value': 2},
        {'text' : '2-3 times a week', 'value': 3}, {'text' : '4 or more times a week', 'value': 4}]}];

//todo fix this for non-MC
var PHQ9Data = [{"type": "Instructions", "text" : "Over the past two weeks, how often have you been bothered by the following problems" },
    {'type': 'PointsMC' ,'question': 'Little interest or pleasure in doing things', 'answers' : [{
    'text': 'Not at all', 'value' : 0 }, {'text' : 'Several Days', 'value': 1}, {'text' : 'More than half the days', 'value': 2},
    {'text' : 'Nearly every day', 'value': 3}]}, {'type': 'PointsMC' ,'question': 'Feeling down, depressed, or hopeless', 'answers' : [{
    'text': 'Not at all', 'value' : 0 }, {'text' : 'Several Days', 'value': 1}, {'text' : 'More than half the days', 'value': 2},
    {'text' : 'Nearly every day', 'value': 3}]}, {'type': 'PointsMC' ,'question': 'Trouble falling or staying asleep, or sleeping too much', 'answers' : [{
    'text': 'Not at all', 'value' : 0 }, {'text' : 'Several Days', 'value': 1}, {'text' : 'Feeling tired or having little energy', 'value': 2},
    {'text' : 'Nearly every day', 'value': 3}]}, {'type': 'PointsMC' ,'question': 'Little interest or pleasure in doing things', 'answers' : [{
    'text': 'Not at all', 'value' : 0 }, {'text' : 'Several Days', 'value': 1}, {'text' : 'Poor appetite or overeating', 'value': 2},
    {'text' : 'Nearly every day', 'value': 3}]}, {'type': 'PointsMC' ,'question': 'Feeling bad about yourself or that you are a failure or have let yourself or your family down', 'answers' : [{
    'text': 'Not at all', 'value' : 0 }, {'text' : 'Several Days', 'value': 1}, {'text' : 'More than half the days', 'value': 2},
    {'text' : 'Nearly every day', 'value': 3}]}, {'type': 'PointsMC' ,'question': 'Trouble concentrating on things, such as reading the newspaper or watching television', 'answers' : [{
    'text': 'Not at all', 'value' : 0 }, {'text' : 'Several Days', 'value': 1}, {'text' : 'More than half the days', 'value': 2},
    {'text' : 'Nearly every day', 'value': 3}]}, {'type': 'PointsMC' ,'question': 'Moving or speaking so slowly that other people could have noticed. Or the opposite being so figety or restless that you have been moving around a lot more than usual', 'answers' : [{
    'text': 'Not at all', 'value' : 0 }, {'text' : 'Several Days', 'value': 1}, {'text' : 'More than half the days', 'value': 2},
    {'text' : 'Nearly every day', 'value': 3}]}, {'type': 'PointsMC' ,'question': 'Thoughts that you would be better off dead, or of hurting yourself', 'answers' : [{
    'text': 'Not at all', 'value' : 0 }, {'text' : 'Several Days', 'value': 1}, {'text' : 'More than half the days', 'value': 2},
    {'text' : 'Nearly every day', 'value': 3}]}, {'type': 'NoPointsMC' ,'question': 'If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?', 'answers' : [{
    'text': 'Not difficult at all'}, {'text' : 'Somewhat difficult'}, {'text' : 'Very difficult'},
    {'text' : 'Extremely difficult'}]}];

var MCRadioButtonIDGenerator = (function() {

    if ( typeof MCRadioButtonIDGenerator.counter == 'undefined' ) {
        // It has not... perform the initialization
        MCRadioButtonIDGenerator.counter = '0';
    }
    return {
        getId : function() {
            return MCRadioButtonIDGenerator.counter;
        },

        generateNewId : function() {
            MCRadioButtonIDGenerator.counter = (+MCRadioButtonIDGenerator.counter + 1).toString();
        }
    }
});

var id = MCRadioButtonIDGenerator();


// call this Survey Template Populator Service
function createAnswerForPointsMC(answerObject) {

    var answerItem = document.createElement('input');
    answerItem.setAttribute('type', 'radio');
    answerItem.setAttribute('id', answerObject.text + id.getId());
    answerItem.setAttribute('value', answerObject.value);
    answerItem.setAttribute('class', 'answer-text');


    answerItem.setAttribute('name', id.getId());

    var answerLabel = document.createElement('Label');
    answerLabel.setAttribute("for",answerObject.text + id.getId());
    answerLabel.appendChild(answerItem);
    answerLabel.appendChild(document.createTextNode(answerObject.text));
    var listItem = document.createElement('li');
    listItem.appendChild(answerLabel);
    return listItem;
}

function createAnswerForNoPointsMC(answerObject) {
    var answerItem = document.createElement('input');
    answerItem.setAttribute('type', 'radio');
    answerItem.setAttribute('id', answerObject.text + id.getId());
    answerItem.setAttribute('class', 'answer-text');


    answerItem.setAttribute('name', id.getId());

    var answerLabel = document.createElement('Label');
    answerLabel.setAttribute("for",answerObject.text + id.getId());
    answerLabel.appendChild(answerItem);
    answerLabel.appendChild(document.createTextNode(answerObject.text));
    var listItem = document.createElement('li');
    listItem.appendChild(answerLabel);
    return listItem;
}

function createPointsMC(questionEntry) {

    var questionContent = document.querySelector('#PointsMCTemplate').content;
    questionContent.querySelector('.answers').innerHTML = '';
    questionContent.querySelector('.question-text').innerHTML = questionEntry.question;
    id.generateNewId();

    for (var counter = 0; counter < questionEntry.answers.length; counter++) {
        questionContent.querySelector('.answers').appendChild(createAnswerForPointsMC(questionEntry.answers[counter])).appendChild(
            document.createElement('br')
        );
    }

    return document.importNode(document.querySelector('#PointsMCTemplate').content,true);

}






function createNoPointsMC(questionEntry) {
    var questionContent = document.querySelector('#NoPointsMCTemplate').content;
    questionContent.querySelector('.answers').innerHTML = '';
    questionContent.querySelector('.question-text').innerHTML = questionEntry.question;
    id.generateNewId();

    for (var counter = 0; counter < questionEntry.answers.length; counter++) {
        questionContent.querySelector('.answers').appendChild(createAnswerForNoPointsMC(questionEntry.answers[counter])).appendChild(
            document.createElement('br')
        );
    }

    return document.importNode(document.querySelector('#NoPointsMCTemplate').content,true);
}

//question is already set in survey template
function createGender() {
    return document.importNode(document.querySelector('#GenderTemplate').content,true);
    //questionTemplate.content.querySelector('#question-text').textContent = questionEntry.question;
}

//todo finish this method
function createInstructions(instructions) {
    document.querySelector('#instructions').innerHTML = instructions.text;
    return document.createTextNode('');

}



//part that does the reading

var idToSurveyMap = {
    "AuditQuestionnaireAlcohol" : auditQuestionnaireAlcoholMisuseData,
    "PHQ9" : PHQ9Data
};



var generateQuestionFromType = {
    "Gender": createGender,
    "PointsMC": createPointsMC,
    "NoPointsMC": createNoPointsMC,
    'Instructions': createInstructions
    // to call fnMap[ value ]( param, param, ... );

};


function generateQuestionsAndAnswers(surveyData ) {

    var survey = document.createDocumentFragment();

    for ( var counter = 0; counter < surveyData.length; counter++) {
        survey.appendChild(generateQuestionFromType[surveyData[counter].type](surveyData[counter]));
    }
    document.querySelector('#survey-area').appendChild(survey);
}