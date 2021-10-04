function findFirstString(str) {
  /**
   * \( match the first parenthesis
   * (.*?) capturing group to capture text inside parenthesis
   * \) match the closing parenthesis
   */
  const regex = /\((.*?)\)/gi;
  const match = regex.exec(str);

  if (!match) return "";
  return match[1];
}

console.log(findFirstString("( hallo ) "));
