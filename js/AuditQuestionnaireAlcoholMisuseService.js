/**
 * Created by kevinzhou on 8/20/16.
 */



var isMale;
var isAlcoholDependent = false;
var isHarmfulDrinker = false;
var isNormal = false;


var normalMessage = "Patient exhibits normal alcohol use.  "
    , alcoholDependentMessage = "Patient exhibits heavy and addictive alcohol use. "
    , harmfulDrinkerMessage = "Patient exhibits harmful alcohol use";

var harmfulCutOffLevels = 8;
var hazardaousCutoffLevels = {male:15, female:13};

function AnalysisFromPatientAnswers(userAnswers)
{
    var totalPoints = getTotalPoints(userAnswers);
     isMale = userAnswers[0].defaultValue.includes('male');

    if (totalPoints < 8) {
        isNormal = true;
        isAlcoholDependent = false;
        isHarmfulDrinker = false;


    }
    else if (totalPoints > harmfulCutOffLevels && totalPoints < (isMale? hazardaousCutoffLevels.male:hazardaousCutoffLevels.female) ) {
        isHarmfulDrinker = true;
        isNormal = false;
        isAlcoholDependent = false;
    }

    else if (totalPoints > harmfulCutOffLevels && totalPoints > (isMale? hazardaousCutoffLevels.male:hazardaousCutoffLevels.female) ) {
        isAlcoholDependent = true;
        isNormal = false;
        isHarmfulDrinker = false;
    }


}

function writeToFile(userAnswers) {
    writeDate();
    writeName(firstName, lastName);
    writeDOB(DOB);
    writeTitle('Audit Questionnaire Alcohol Misuse Survey Results');

    if (isNormal) {
        writeSummary(normalMessage);
    }
    else if (isHarmfulDrinker) {
        writeSummary(harmfulDrinkerMessage)
    }

    else if (isAlcoholDependent) {
        writeSummary(alcoholDependentMessage);
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
