// unit.test.js

const {
    isPhoneNumber,
    isEmail,
    isStrongPassword,
    isDate,
    isHexColor
  } = require('./unit-test-me');
  
// isPhoneNumber
test('Valid phone number should return true', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });
  
test('Valid phone number should return true', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
  
test('Invalid phone number should return false', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
});
  
test('Invalid phone number should return false', () => {
    expect(isPhoneNumber('123-45-67890')).toBe(false);
});
  
// isEmail
test('Valid email should return true', () => {
    expect(isEmail('test@example.com')).toBe(true);
});
  
test('Valid email should return true', () => {
    expect(isEmail('user123@gmail.com')).toBe(true);
});
  
test('Invalid email should return false', () => {
    expect(isEmail('test@')).toBe(false);
});
  
test('Invalid email should return false', () => {
    expect(isEmail('user123@gmail')).toBe(false);
});
  
// isStrongPassword
test('Valid strong password should return true', () => {
    expect(isStrongPassword('Abcd1234')).toBe(true);
});
  
test('Valid strong password should return true', () => {
    expect(isStrongPassword('Pass_123')).toBe(true);
});
  
test('Invalid strong password should return false', () => {
    expect(isStrongPassword('password123')).toBe(false);
});
  
test('Invalid strong password should return false', () => {
    expect(isStrongPassword('Abcd_')).toBe(false);
});
  
// isDate
test('Valid date should return true', () => {
    expect(isDate('01/01/2022')).toBe(true);
});
  
test('Valid date should return true', () => {
    expect(isDate('12/31/2023')).toBe(true);
});
  
test('Invalid date should return false', () => {
    expect(isDate('1/1/22')).toBe(false);
});
  
test('Invalid date should return false', () => {
    expect(isDate('31-12-2023')).toBe(false);
});
  
// isHexColor
test('Valid hex color should return true', () => {
    expect(isHexColor('#FF0000')).toBe(true);
});
  
test('Valid hex color should return true', () => {
    expect(isHexColor('#0F0')).toBe(true);
});
  
test('Invalid hex color should return false', () => {
    expect(isHexColor('#G12345')).toBe(false);
});
  
test('Invalid hex color should return false', () => {
    expect(isHexColor('ABC123')).toBe(false);
});
