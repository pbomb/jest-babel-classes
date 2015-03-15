jest.dontMock('../collaborator');

const MyClass = require('../my-class');
const collaborator = require('../collaborator');

describe('collaborator', () => {
  it('returns the given name of MyClass', () => {
    const name = 'my name';
    expect(collaborator.getClassName()).toBe(name);
  });
});