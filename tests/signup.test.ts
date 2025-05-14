
import { test } from "@playwright/test";
import { RegisterPage } from "pages/RegisterPage";
import { generateUser } from "types/UserUtils";

let registerPage: RegisterPage;

test.beforeEach(async ({ page }) => {
  registerPage = new RegisterPage(page);
  await page.goto("https://makeup.com.ua/ua/register/");
});

test("Success user registration", async () => {
  const user = generateUser();
  await registerPage.fillSignUpForm(user);
  await registerPage.verifyRegistrationSuccess();
});


test("Should not allow registration with invalid email address", async () => {
  const user = generateUser({ email: "invalid-email" }); // Генерація некоректного email
  await registerPage.fillSignUpForm(user);
  await registerPage.verifyInvalidEmail();
});

test("Should not allow registration with empty required fields - Password", async () => {
  const user = generateUser({ password: "" }); // Генерація користувача без пароля
  await registerPage.fillSignUpForm(user);
  await registerPage.verifyInvalidPassword();
});

test("Should not allow registration with an already used email", async () => {
  const user = generateUser({ email: "ravarx1@gmai.com" });  //Вже існуючий мейл
  await registerPage.fillSignUpForm(user);
  await registerPage.verifyEmailAlreadyUsedError();
});