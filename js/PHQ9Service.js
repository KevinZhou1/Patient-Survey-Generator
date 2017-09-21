/**
 * Created by kevin on 12/6/16.
 */


var isNormal = false;
var isMildDepression = false;
var isModerateDepression = false;
var isModeratelySevereDepression = false;
var isSevereDepression = false;


var normalMessage = ["Patient exhibits no or minimal signs of depression ", "the patient may not need depression treatment"]
    , mildDepressionMessage = ["Patient exhibits a few mild depression symptoms. ", "Physician uses clinical judgment about treatment, based on patient's duration of symptoms and functional impairment"]
    , moderateDepressionMessage = ["Patient exhibits a few moderate depression symptoms","Physician uses clinical judgment about treatment, based on patient's duration of symptoms and functional impairment"]
    , moderatelySevereDepressionMessage = ["Patient exhibits several moderately severe depression symptoms", "Warrants treatment for depression, using antidepressant,psychotherapy and/or a combination of treatment."]
    , severeDepressionMessage = ["Patient exhibits severe depression symptoms", "Warrants treatment for depression, using antidepressant, psychotherapy and/or a combination of treatment."];

var mildDepressionCutoff = 5;
var moderateDepressionCutoff = 10;
var moderatelySevereDepressionCutoff = 15;
var severeDepressionCutoff = 20;

function AnalysisFromPatientAnswers(userAnswers)
{
    var totalPoints = getTotalPoints(userAnswers);

    if (totalPoints < mildDepressionCutoff) {
        isNormal = true;
        isMildDepression = false;
        isModerateDepression = false;
        isModeratelySevereDepression = false;
        isSevereDepression = false;


    }
    else if (totalPoints > mildDepressionCutoff && totalPoints < moderateDepressionCutoff) {
        isNormal = false;
        isMildDepression = true;
        isModerateDepression = false;
        isModeratelySevereDepression = false;
        isSevereDepression = false;
    }

    else if (totalPoints > moderateDepressionCutoff && totalPoints > moderatelySevereDepressionCutoff ) {
        isNormal = false;
        isMildDepression = false;
        isModerateDepression = true;
        isModeratelySevereDepression = false;
        isSevereDepression = false;
    }

    else if (totalPoints > moderatelySevereDepressionCutoff && totalPoints > severeDepressionCutoff ) {
        isNormal = false;
        isMildDepression = false;
        isModerateDepression = false;
        isModeratelySevereDepression = true;
        isSevereDepression = false;
    }

    else {
        isNormal = false;
        isMildDepression = false;
        isModerateDepression = false;
        isModeratelySevereDepression = false;
        isSevereDepression = true;
    }


}

function writeToFile() {
    writeDate();
    writeName(firstName, lastName);
    writeDOB(DOB);
    writeTitle('PHQ9 Survey Results');


    if (isNormal) {
        writeSummary(normalMessage);
    }
    else if (isMildDepression) {
        writeSummary(mildDepressionMessage)
    }

    else if (isModerateDepression) {
        writeSummary(moderateDepressionMessage);
    }
    else if (isModeratelySevereDepression) {
        writeSummary(moderatelySevereDepressionMessage);
    }

    else {
        writeSummary(severeDepressionMessage);
    }

    writeSurveyResults(getSurveyResults());


}



function reset() {
    window.history.back();
    alert('Form submitted');
}


function getTotalPoints(userAnswers) {
    var points = 0;
    userAnswers.forEach(function(answer)
    {
        if (answer.parentNode.parentNode.parentNode.parentNode.classList.contains("PointsMC"))
        {
            points += +answer.value;
        }
    });
    return points;
}
