# Scrooge McDuck's cryptocurrency insights - BitSights

Bitcoin market value analytics tool with insights.

Programming pre-assignment for Vincit Rising Star.

## Symbols, abbreviations

Bitcoin, BTC, ₿
Euro, EUR, €

## Notable information

- Used market value data source is [CoinGecko API](https://www.coingecko.com)
- Price of the day is the price of BTC at 00:00 (UTC) or closest to UTC midnight
- Market value (price of the day) given in EUR
- Date format YYYY-MM-DD

## Features

- Date range user input
- Longest downward (bearish) trend AND longest upward (bullish) trend within given date range
- Date of highest trading volume within given date range and volume on that day in EUR
- Insights for given date range:
    - Prediction of best day to buy BTC
    - Prediction of best day to sell BTC
    - Advices against buying and selling if market value trend on date range is bearish

## Development status

| Feature | Status |
| :------ | :----: |
| UI layout | dev |
| Date range input | dev |
| Market value indicator | dev |
| Market value indicator (bearish/bullish) | dev |
| Longest bullish trend length | dev |
| Longest bearish trend length | dev |

## Stack

- Vanilla JS, React, Redux Toolkit, MUI for UI and application state management
- Axios for requesting data
- JS functions for data mangling
