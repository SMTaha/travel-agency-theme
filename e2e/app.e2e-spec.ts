import { TravelAgencyThemePage } from './app.po';

describe('travel-agency-theme App', () => {
  let page: TravelAgencyThemePage;

  beforeEach(() => {
    page = new TravelAgencyThemePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
