import { faker } from "@faker-js/faker";

export const usersData = [...Array(25)].map(() => ({
  id: faker.datatype.number(),
  name: faker.name.fullName(),
  email: faker.internet.email(),
  role: faker.helpers.arrayElement(["manager", "editor", "reviewer"]),
}));
