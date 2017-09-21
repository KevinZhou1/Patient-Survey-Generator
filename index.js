/**
 * Created by kevinzhou on 11/8/16.
 */



function submit(){
    saveData();
    validityCheckAndProceed();
}

window.onload = function() {
    document.getElementById("submit").addEventListener("click", submit);

};



function saveData() {

    localStorage.setItem('firstName',document.getElementsByName('firstName')[0].value);
    localStorage.setItem('lastName', document.getElementsByName('lastName')[0].value);
    localStorage.setItem('DOB', document.getElementsByName('dob-month')[0].value +
        '/' + document.getElementsByName('dob-day')[0].value + '/'
        + document.getElementsByName('dob-year')[0].value);

}

function validityCheckAndProceed() {
    var valid = false;

    if (firstName != '' && lastName!= '' && lastName != '' && document.getElementsByName('dob-month')[0].value!= ''
     && document.getElementsByName('dob-day')[0] != '' && document.getElementsByName('dob-year')[0].value!= '') {
        valid = true;
    }


    if (valid) {
        window.location.href = "html/SurveyList.html";

    }

    else
    {
        alert('Please enter all information');
    }


}