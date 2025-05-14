// import {faker} from "@faker-js/faker";
// import {test} from "@playwright/test";
// import {RegisterPage} from "pages/RegisterPage";
// import {User} from "types/User";

// let password: string;
// let registerPage: RegisterPage;

// test.beforeEach(async ({page}) => {
//   password = faker.internet.password({length: 10});
//   registerPage = new RegisterPage(page);
//   await page.goto("https://makeup.com.ua/ua/register/");
// });

// test("Success user registration", async () => {
//   const user: User = {
//     firstName: faker.person.firstName(),
//     lastName: faker.person.lastName(),
//     birthday: faker.date.birthdate().getFullYear().toString(),
//     phone: "097" + faker.string.numeric(7),
//     email: faker.internet.email(),
//     password: password,
//     confirmPassword: password,
//   };

//   await registerPage.fillSignUpForm(user);

//   await registerPage.verifyRegistrationSuccess();
// });

// test("Should not allow registration with an already used email", async () => {
//   const user: User = {
//     firstName: faker.person.firstName(),
//     lastName: faker.person.lastName(),
//     birthday: faker.date.birthdate().getFullYear().toString(),
//     phone: "097" + faker.string.numeric(7),
//     email: "ravarx1@gmai.com", // TODO: Replace hardcoded email with a function to get a used email
//     password: password,
//     confirmPassword: password,
//   };

//   await registerPage.fillSignUpForm(user);

//   await registerPage.verifyEmailAlreadyUsedError();
// });

// test("Should not allow registration with invalid email address", async () => {
//   const user: User = {
//     firstName: faker.person.firstName(),
//     lastName: faker.person.lastName(),
//     birthday: faker.date.birthdate().getFullYear().toString(),
//     phone: "097" + faker.string.numeric(7),
//     email: "invalid-email",
//     password: password,
//     confirmPassword: password,
//   };

//   await registerPage.fillSignUpForm(user);

//   await registerPage.verifyInvalidEmail();
// });

// test("Should not allow registration with empty required fields - Password", async () => {
//   const user: User = {
//     firstName: faker.person.firstName(),
//     lastName: faker.person.lastName(),
//     birthday: faker.date.birthdate().getFullYear().toString(),
//     phone: "097" + faker.string.numeric(7),
//     email: faker.internet.email(),
//     password: "",
//     confirmPassword: password,
//   };

//   await registerPage.fillSignUpForm(user);
//   await registerPage.verifyInvalidPassword();
// });
