// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Test isPhoneNumber function
test('should return true for valid formats', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('should return false for invalid formats', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
  expect(isPhoneNumber('123-345--6789')).toBe(false);
});

// Test isEmail function
test('should return true for valid emails', () => {
  expect(isEmail('test@example.com')).toBe(true);
  expect(isEmail('user_name@work.org')).toBe(true);
});

test('should return false for invalid emails', () => {
  expect(isEmail('plainaddress')).toBe(false); 
  expect(isEmail('test@example.longtld')).toBe(false);
});

// Test isStrongPassword function
test('should return true for valid passwords', () => {
  expect(isStrongPassword('A1b2_c3d4')).toBe(true);
  expect(isStrongPassword('pAssword123')).toBe(true);
});

test('should return false for invalid passwords', () => {
  expect(isStrongPassword('1abcde')).toBe(false); 
  expect(isStrongPassword('abc')).toBe(false);    
});

// Test isDate function
test('should return true for valid date formats', () => {
  expect(isDate('1/1/2024')).toBe(true);
  expect(isDate('12/31/1999')).toBe(true);
});

test('should return false for invalid date formats', () => {
  expect(isDate('2024/01/01')).toBe(false); 
  expect(isDate('01-01-2024')).toBe(false); 
});

// Test isHexColor function
test('should return true for valid hex codes', () => {
  expect(isHexColor('#FFF')).toBe(true);
  expect(isHexColor('00aaFF')).toBe(true);
});

test('should return false for invalid hex codes', () => {
  expect(isHexColor('#GG1122')).toBe(false); 
  expect(isHexColor('#1234')).toBe(false);
});