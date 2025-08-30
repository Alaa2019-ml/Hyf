import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */

const possibleMentorsForModule = (moduleName) => {
  const mentorsNames = mentors
    .filter((element) => {
      return element.canTeach.includes(moduleName);
    })
    .map((element) => {
      return element.name;
    });
  // TODO complete this function
  return mentorsNames;
};
console.log(possibleMentorsForModule("javascript"));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
  // TODO complete this function
  const mentorsName = possibleMentorsForModule(moduleName);
  const randomMentor = Math.floor(Math.random() * mentorsName.length);
  return mentorsName[randomMentor];
};
// You can uncomment out this line to try your function
console.log(findMentorForModule("javascript"));
