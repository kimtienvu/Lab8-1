//This file contains the actual unit tests

const formatVolumeIconPath = require('../assets/scripts/main');
//const formatFunction = testingFile.formatVolumeIconPath;

describe("testing that volumeValue > 66", () => {
  
  test('volumeValue > 66 should have 3 in iconLevel', () => {
    expect(formatVolumeIconPath(67)).toMatch(/3/);
  });
  
  test('volumeValue > 66 should have 3 in iconLevel', () => {
    expect(formatVolumeIconPath(68)).toMatch(/3/);
  });
  
  test('volumeValue > 66 should have 3 in iconLevel', () => {
    expect(formatVolumeIconPath(100)).toMatch(/3/);
  });
  
});

describe("testing that volumeValue > 33", () => {
  
  test('volumeValue > 33 should have 2 in iconLevel', () => {
    expect(formatVolumeIconPath(40)).toMatch(/2/);
  });
  
  test('volumeValue > 33 should have 2 in iconLevel', () => {
    expect(formatVolumeIconPath(34)).toMatch(/2/);
  });
  
  test('volumeValue > 33 should have 2 in iconLevel', () => {
    expect(formatVolumeIconPath(50)).toMatch(/2/);
  });
});

describe("testing that volumeValue > 0", () => {
  
  test('volumeValue > 0 should have 3 in iconLevel', () => {
    expect(formatVolumeIconPath(1)).toMatch(/1/);
  });
  
  test('volumeValue > 0 should have 3 in iconLevel', () => {
    expect(formatVolumeIconPath(33)).toMatch(/1/);
  });
  
  test('volumeValue > 0 should have 3 in iconLevel', () => {
    expect(formatVolumeIconPath(10)).toMatch(/1/);
  });
});

describe("testing that volumeValue is 0 or less than 0", () => {
  
  test('volumeValue of 0 should have 0 in iconLevel', () => {
    expect(formatVolumeIconPath(0)).toMatch(/0/);
  });
  
  test('volumeValue of -1 should have 0 in iconLevel', () => {
    expect(formatVolumeIconPath(-1)).toMatch(/0/);
  });
  
  test('volumeValue of -10 should have 0 in iconLevel', () => {
    expect(formatVolumeIconPath(-10)).toMatch(/0/);
  });
});
