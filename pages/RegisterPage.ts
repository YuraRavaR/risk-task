import test, {expect, Locator, Page} from "@playwright/test";
import {BasePage} from "./BasePage";
import {User} from "types/User";
import {step} from "utils/stepDecorator";

export class RegisterPage extends BasePage {
  private readonly usernameField: Locator;
  private readonly surnameField: Locator;
  private readonly birthdayField: Locator;
  private readonly phoneField: Locator;
  private readonly emailField: Locator;
  private readonly passwordField: Locator;
  private readonly repeatPasswordField: Locator;
  private readonly signUpButton: Locator;
  private readonly visibleCalendar: Locator;
  private readonly registrationMessageLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameField = page.locator("//input[@id='name']");
    this.surnameField = page.locator("//input[@id='surname']");
    this.birthdayField = page.locator("//input[@id='birthday']");
    this.phoneField = page.locator("//input[@id='phone']");
    this.emailField = page.locator("//input[@id='email']");
    this.passwordField = page.locator("//input[@id='password']");
    this.repeatPasswordField = page.locator("//input[@id='repeat-password']");
    this.signUpButton = page.getByRole("button", {name: "Зареєструватися"});
    this.registrationMessageLocator = page.locator("//div[@class='registration-done']");
    //TODO: Replace calendar to reusable components in future
    this.visibleCalendar = page.locator("//div[@class='calendar' and contains(@style, 'display: block;')]");
  }

  async fillSignUpForm(userData: User) {
    await test.step(`Fill in first name: ${userData.firstName}`, async () => {
      await this.usernameField.fill(userData.firstName);
    });

    await test.step(`Fill in last name: ${userData.lastName}`, async () => {
      await this.surnameField.fill(userData.lastName);
    });

    await test.step(`Select birthday with year: ${userData.birthday}`, async () => {
      await this.selectDate(userData.birthday);
    });

    await test.step(`Fill in phone number: ${userData.phone}`, async () => {
      await this.phoneField.pressSequentially(userData.phone);
    });

    await test.step(`Fill in email: ${userData.email}`, async () => {
      await this.emailField.fill(userData.email);
    });

    await test.step(`Fill in password: ${userData.password}`, async () => {
      await this.passwordField.fill(userData.password);
    });

    await test.step(`Fill in confirm password: ${userData.confirmPassword}`, async () => {
      await this.repeatPasswordField.fill(userData.confirmPassword);
    });

    await test.step("Click sign-up button", async () => {
      await this.signUpButton.click();
    });
  }

  @step("Verify registration with success message")
  async verifyRegistrationSuccess() {
    await expect(this.registrationMessageLocator).toContainText("Реєстрація пройшла успішно!");
    await expect(this.signUpButton).not.toBeVisible();
  }

  @step("Verify email already used error")
  async verifyEmailAlreadyUsedError() {
    await this.verifyInvalidEmail()
    await expect(this.emailField).toHaveAttribute("title", "Користувач з вказаним Email вже зареєстрований!");
  }

  @step("Verify validation error for invalid password")
  async verifyInvalidPassword() {
    await this.verifyFieldInvalid(this.passwordField);
  }

  @step("Verify validation error for invalid email")
  async verifyInvalidEmail() {
    await this.verifyFieldInvalid(this.emailField);
  }

  @step("Verify validation error for invalid phone")
  async verifyInvalidPhone() {
    await this.verifyFieldInvalid(this.phoneField);
  }

  private async verifyFieldInvalid(field: Locator) {
    const wrapper = field.locator("xpath=/ancestor::div[contains(@class, 'animated-input-group')]");
    await expect(wrapper).toHaveClass(/invalid/);
  }

  // TODO: Make date selection more dynamic and without timeout
  async selectDate(year: string) {
    await this.birthdayField.click();
    await this.page.waitForTimeout(1000);
    await this.visibleCalendar.locator("//span[@class='down-year']").click();
    await this.visibleCalendar.locator(`//div[contains(@class,'custom-select__popup')]//*[@data-value='${year}']`).click();
    await this.visibleCalendar.locator(`//span[@class='day' and text() = '1']`).click();
  }
}
