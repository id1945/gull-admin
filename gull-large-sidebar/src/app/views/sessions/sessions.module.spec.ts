import { SessionsModule } from './sessions.module';

describe('SessionsModule', () => {
  let sessionsModule: SessionsModule;

  beforeEach(() => {
    sessionsModule = new SessionsModule();
  });

  it('should create an instance', () => {
    expect(sessionsModule).toBeTruthy();
  });
});
