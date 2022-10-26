import * as RegisterActions from './register.actions';

describe('Register', () => {
  it('should create an instance', () => {
    expect(new RegisterActions.LoadRegisters()).toBeTruthy();
  });
});
