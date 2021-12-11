
describe('bitsights UI & integration tests', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).to.be.false;
    dummy = true;
    expect(dummy).to.be.true;
  });
  it('BitSights loads', () => {
    cy.visit('/');
    cy.get('[id="rff.app.bitsights"]').should('to.exist').and('be.visible');
  });
  it('BitSights loads, has header', () => {
    cy.visit('/');
    cy.get('[id="rff.app.bitsights.header"]').should('to.exist').and('be.visible');
    cy.get('[id="rff.app.bitsights.header"]').contains('₿itSights');
  });
  it('BitSights loads, has footer', () => {
    cy.visit('/');
    cy.get('[id="rff.app.bitsights.footer"]').should('to.exist').and('be.visible');
    cy.get('[id="rff.app.bitsights.footer"]').contains('Version');
    cy.get('[id="rff.app.bitsights.footer"]').contains('Repository');
    cy.get('[id="rff.app.bitsights.footer"]').contains('Author');
  });
  it('BitSights loads, has content', () => {
    cy.visit('/');
    cy.get('[id="rff.app.bitsights.content"]').should('to.exist').and('be.visible');
  });
  it('BitSights loads, has date range input', () => {
    cy.visit('/');
    cy.get('[id="rff.app.bitsights.content.daterange"]').should('to.exist').and('be.visible');
    cy.get('[id="rff.app.bitsights.content.daterange"]').contains('Date range start');
    cy.get('[id="rff.app.bitsights.content.daterange"]').contains('Date range end');
  });
  it('BitSights loads, has insight', () => {
    cy.visit('/');
    cy.get('[id="rff.app.bitsights.content.insight"]').should('to.exist').and('be.visible');
    cy.get('[id="rff.app.bitsights.content.insight"]').contains('₿itcoin market value');
    cy.get('[id="rff.app.bitsights.content.insight"]').contains('₿itcoin information');
  });
  it('BitSights loads, has basic data', () => {
    cy.visit('/');
    cy.get('[id="rff.app.bitsights.content.insight.basic_data"]').should('to.exist').and('be.visible');
    cy.get('[id="rff.app.bitsights.content.insight.basic_data"]').contains('Value');
    cy.get('[id="rff.app.bitsights.content.insight.basic_data"]').contains('Name');
    cy.get('[id="rff.app.bitsights.content.insight.basic_data"]').contains('Symbol');
    cy.get('[id="rff.app.bitsights.content.insight.basic_data"]').contains('Hashing');
    cy.get('[id="rff.app.bitsights.content.insight.basic_data"]').contains('Genesis date');
  });
  it('BitSights loads, has all-time low', () => {
    cy.visit('/');
    cy.get('[id="rff.app.bitsights.content.insight.basic_data.athl_low"]').should('to.exist').and('be.visible');
    cy.get('[id="rff.app.bitsights.content.insight.basic_data.athl_low"]').contains('All-Time Low');
  });
  it('BitSights loads, has all-time high', () => {
    cy.visit('/');
    cy.get('[id="rff.app.bitsights.content.insight.basic_data.athl_high"]').should('to.exist').and('be.visible');
    cy.get('[id="rff.app.bitsights.content.insight.basic_data.athl_high"]').contains('All-Time High');
  });
  it('BitSights loads, has ranged data', () => {
    cy.visit('/');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data"]').should('to.exist').and('be.visible');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.trade"]').should('to.exist').and('be.visible');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.trade"]').contains('Trade volume');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.trend"]').should('to.exist').and('be.visible');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.trend"]').contains('Market value trend');
  });
  it('BitSights loads, has date range', () => {
    cy.visit('/');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.date_range"]').should('to.exist').and('be.visible');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.date_range"]').contains('Date range');
  });
  it('BitSights loads, has value chart', () => {
    cy.visit('/');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.value_chart"]').should('to.exist').and('be.visible');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.value_chart"]').contains('₿TC market value in €');
  });
  it('BitSights loads, has lowest value', () => {
    cy.visit('/');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.value_low"]').should('to.exist').and('be.visible');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.value_low"]').contains('Lowest value');
  });
  it('BitSights loads, has highest value', () => {
    cy.visit('/');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.value_high"]').should('to.exist').and('be.visible');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.value_high"]').contains('Highest value');
  });
  it('BitSights loads, has lowest volume', () => {
    cy.visit('/');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.volume_low"]').should('to.exist').and('be.visible');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.volume_low"]').contains('Lowest trading volume');
  });
  it('BitSights loads, has highest volume', () => {
    cy.visit('/');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.volume_high"]').should('to.exist').and('be.visible');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.volume_high"]').contains('Highest trading volume');
  });
  it('BitSights loads, has trading recommendations', () => {
    cy.visit('/');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.trade_recommendations.head"]').should('to.exist').and('be.visible');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.trade_recommendations.head"]').contains('Trade recommendations');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.trade_recommendations.buy"]').should('to.exist').and('be.visible');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.trade_recommendations.buy"]').contains(/(Buying recommended|Buying not recommended)/);
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.trade_recommendations.sell"]').should('to.exist').and('be.visible');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.trade_recommendations.sell"]').contains(/(Selling recommended|Selling not recommended)/);
  });
  it('BitSights loads, has bearish', () => {
    cy.visit('/');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.trend_bearish.head"]').should('to.exist').and('be.visible');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.trend_bearish.head"]').contains('Longest bearish trend');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.trend_bearish.start"]').should('to.exist').and('be.visible');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.trend_bearish.start"]').contains('Bearish trend start');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.trend_bearish.end"]').should('to.exist').and('be.visible');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.trend_bearish.end"]').contains('Bearish trend end');
  });
  it('BitSights loads, has bullish', () => {
    cy.visit('/');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.trend_bullish.head"]').should('to.exist').and('be.visible');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.trend_bullish.head"]').contains('Longest bullish trend');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.trend_bullish.start"]').should('to.exist').and('be.visible');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.trend_bullish.start"]').contains('Bullish trend start');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.trend_bullish.end"]').should('to.exist').and('be.visible');
    cy.get('[id="rff.app.bitsights.content.insight.ranged_data.analysed_data.trend_bullish.end"]').contains('Bullish trend end');
  });
});