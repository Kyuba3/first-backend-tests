const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('FormatFullname', () => {
  it('should return an error if arg fullName is not a string', () => {
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(1)).to.equal('Error');
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });
  it('should return an error if arg fullname is empty', () => {
    expect(formatFullname()).to.equal('Error');
  });
  it('should return correct formatted fullName anyways', () => {
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('jOHn DOE')).to.equal('John Doe');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
  });
  it('should return an error if arg fullName is incorrect', () => {
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('John Doe Test')).to.equal('Error');
    expect(formatFullname('Doe')).to.equal('Error');
  });
});