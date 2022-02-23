import { InboxModule } from './inbox.module';

describe('InboxModule', () => {
  let inboxModule: InboxModule;

  beforeEach(() => {
    inboxModule = new InboxModule();
  });

  it('should create an instance', () => {
    expect(inboxModule).toBeTruthy();
  });
});
