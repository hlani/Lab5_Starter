// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//isPhoneNumber function test
test( 'valid phone number', () => {
  expect(isPhoneNumber("619-252-1084")).toBe(true);
});

test( 'valid phone number w/ prefix', () => {
  expect(isPhoneNumber("1(619)252-1084")).toBe(true);
});

test( 'invalid phone number ', () => {
  expect(isPhoneNumber("not a number")).toBe(false);
});

test( 'invalid phone number ', () => {
  expect(isPhoneNumber("1234567890")).toBe(false);
});



//isEmail function test
test( 'valid email ', () => {
  expect(isEmail("lamhailani@gmail.com")).toBe(true);
});

test( 'valid email ', () => {
  expect(isEmail("magnetic@illit.co")).toBe(true);
});

test( 'invalid email ', () => {
  expect(isEmail("lamhailani@@gmail.com")).toBe(false);
});

test( 'invalid email ', () => {
  expect(isEmail("notanemail.com")).toBe(false);
});


//isStrongPassword function test
test( 'is a strong password ', () => {
  expect(isStrongPassword("h1234")).toBe(true);
});

test( 'is a strong password ', () => {
  expect(isStrongPassword("H___")).toBe(true);
});

test( 'is not a valid strong password', () => {
  expect(isStrongPassword(" ")).toBe(false); //empty
});

test( 'is a not a valid strong password ', () => {
  expect(isStrongPassword("h123$$$")).toBe(false); //does not accept dollar signs
});


//isDate function test
test( 'is a valid date ', () => {
  expect(isDate("05/22/2003")).toBe(true); 
});

test( 'is a valid date ', () => {
  expect(isDate("5/7/2024")).toBe(true); 
});

test( 'is a invalid date ', () => {
  expect(isDate("5/7/24")).toBe(false); 
});

test( 'is a invalid date ', () => {
  expect(isDate("5-7-2024")).toBe(false); 
});


//isHexColor function test
test( 'is a valid hex color ', () => {
  expect(isHexColor("#abc")).toBe(true); 
});

test( 'is a valid hex color ', () => {
  expect(isHexColor("#FFFFFF")).toBe(true); 
});

test( 'is a invalid hex color ', () => {
  expect(isHexColor("#FFFF")).toBe(false);
});

test( 'is a valid hex color ', () => {
  expect(isHexColor("blue")).toBe(false); 
});