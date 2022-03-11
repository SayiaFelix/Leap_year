function check_leapyear() {
    let leapYaer = document.getElementById('year').value;

    if ((leapYaer % 4 == 0) && (leapYaer % 100 != 0) || (leapYaer % 400 == 0)) {


        alert(`${leapYaer} is a leap year`);

    } else {
        alert(`${leapYaer} is not a leap year`)

    }

};