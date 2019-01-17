order:
ticker - eg AAPL
side - buy/sell
price (per share) - 5.66
shares (number of shares) - 45

book (open orders):
collects orders per ticker
checks orders against other orders
matches the highest price on the buy side, or with the lowest price on the sell side
if prices are uneven, the higher buy price is the set price

requirements:
post orders
bar graph for open orders for given ticker
select price on bar graph to list open orders for ticker & price
log all closed orders at bottom of screen

if ticker selected, show:
graph
list of orders (if price selected)
create order form
log orders

components:
- orders
  - graph
  - list
  - create
  - log

models:

order: {
  ticker,
  side,
  price,
  shares,
  open
}
