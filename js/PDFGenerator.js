/**
 * Created by kevinzhou on 11/2/16.
 */
var report = new jsPDF();
report.setFontSize('8');
var textHeightLocation = 40;
var incrementSize = 6;


function writeName(firstName, lastName){
    report.text('Patient:' + lastName + ',' + firstName,5,10);
}

function writeDOB(DOB) {
    report.text("Date of Birth:" + DOB, 5, 15);
}


function writeSummary(summary) {
    report.text("Analysis: ", 5, textHeightLocation);
    textHeightLocation += incrementSize;
    if (summary instanceof Array) {
        for (var counter = 0; counter < summary.length; counter++) {
            report.text(summary[counter], 5, textHeightLocation);
            textHeightLocation += incrementSize;
        }
    }

    else {
        report.text(summary, 5, textHeightLocation);
    }
    textHeightLocation += incrementSize * 3;
}

function writeTitle(name) {
    var pageCenter = 105;
    var nameLength = name.length;
    //1.5 is a correction factor, need the amount of pixels a word space takes up
    report.text(name, pageCenter-(nameLength/2)*1.5, 10)
}

function writeDate() {

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    }

    if(mm<10) {
        mm='0'+mm
    }

    today = mm+'/'+dd+'/'+yyyy;

    report.text("Date:" + today, 175,5);
}


function writeSurveyResults(results) {
    report.text('Patient\'s Responses:', 5, textHeightLocation);
    textHeightLocation += incrementSize;

    // if questions length is very long, divide it by 2
    for (var counter =0; counter<  results.length; counter++) {
        if (results[counter].question.length + results[counter].answer.length > 150) {
            var questionTextSplit = results[counter].question.split(' ');
            var firstLine = '';
            while (firstLine.length < 135) {
                firstLine = firstLine + " " + questionTextSplit.shift();
            }

            report.text(firstLine,5,textHeightLocation);
            textHeightLocation += incrementSize;
            report.text(questionTextSplit.join(' ') + ": " + results[counter].answer, 5, textHeightLocation);

        }
        else {
            report.text(results[counter].question + ": " + results[counter].answer,5,textHeightLocation);

        }
        textHeightLocation += incrementSize *1.3;
    }
}

function savePDF(fileName, lastName, firstName) {
    report.save(lastName + ',' + firstName + "-" +fileName + '.pdf');
}

function openFile() {
    report.output('datauri');
}
