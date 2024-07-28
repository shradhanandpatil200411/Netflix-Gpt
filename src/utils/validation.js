export const checkValidation = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9_.+]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
    email
  );
  const isPasswordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/.test(
    password
  );
  if (!isEmailValid) return "Enter the valid email address";
  if (!isPasswordValid) return "Enter the valid password";
  return null;
};
