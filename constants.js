// Server
const PORT = 5000;
const DB_NAME = "3d-print-models";
const BCRYPT_SALT_ROUNDS = 10;
const JWT_SECRET = "secret";

// Validation
const USERNAME_MIN_LENGTH = 3;
const USERNAME_MAX_LENGTH = 22;
const PASSWORD_MIN_LENGTH = 3;
const PASSWORD_MAX_LENGTH = 22;
const REPEAT_PASSWORD_MIN_LENGTH = PASSWORD_MIN_LENGTH;
const REPEAT_PASSWORD_MAX_LENGTH = PASSWORD_MAX_LENGTH;
const EMAIL_MIN_LENGTH = 6;
const EMAIL_MAX_LENGTH = 256;

const constants = {
  PORT,
  DB_NAME,
  BCRYPT_SALT_ROUNDS,
  JWT_SECRET,
  USERNAME_MIN_LENGTH,
  USERNAME_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
  REPEAT_PASSWORD_MIN_LENGTH,
  REPEAT_PASSWORD_MAX_LENGTH,
  EMAIL_MIN_LENGTH,
  EMAIL_MAX_LENGTH,
};

module.exports = constants;
