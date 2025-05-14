import { faker } from "@faker-js/faker";
import { User } from "types/User";

export function generateUser(overrides: Partial<User> = {}): User {
  const password = faker.internet.password({ length: 10 });

  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    birthday: faker.date.birthdate().getFullYear().toString(),
    phone: "097" + faker.string.numeric(7),
    email: faker.internet.email(),
    password,
    confirmPassword: password,
    ...overrides,
  };
}