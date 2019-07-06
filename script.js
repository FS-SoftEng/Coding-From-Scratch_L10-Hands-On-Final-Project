function idCard() {
    console.log("i'm executing");
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value; 
    var fullName = firstName + " " + lastName;
    var address = document.getElementById("address").value;
    var age = parseInt(document.getElementById("age").value);
    var phoneNumber = parseInt(document.getElementById("phoneNumber").value); 
    
    document.getElementById("postFullName").innerHTML = fullName;
    document.getElementById("postAddress").innerHTML = address; 

    var numberArray = [];
    numberArray.push(age, phoneNumber);

    for (var i = 0; i < numberArray.length; i++) {
        if (numberArray[i] <= 100) {
            document.getElementById("postAge").innerHTML= "Age: " + age;
        }

        else if (numberArray[i] > 100) {
            document.getElementById("postPhoneNumber").innerHTML= "Phone Number: " + phoneNumber;
        }
    }
}