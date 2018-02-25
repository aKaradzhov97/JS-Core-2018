function assignProperties(input) {
    let name = input[0];
    let nameInput = input[1];

    let age = input[2];
    let ageInput = input[3];

    let gender = input[4];
    let genderInput = input[5];

    console.log({
        [name]: nameInput,
        [age]: ageInput,
        [gender]: genderInput
    })
}