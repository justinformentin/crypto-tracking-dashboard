# Crypto Tracking Dashboard

https://cryptocoincrunch.com

This is a cryptocurrency tracking dashboard that has only few, necessary components to track crypto prices. 

Yes, there are thousands of dashboards already in existance, but I wanted to make my own to be in control of the functionality.


Install dependencies and then run.

```
npm install

npm start
```

Build with

```
npm run build
```

**This is a work in progress.** 
#### Bugs

* [ ] Some coin news pages don't work currently. Due to the nature of twitter usernames, some names are different from the actual currency name. For example, Bitcoin Cash's username is "bitco1ncash". This causes an error to be thrown when clicking on the news arrow because it is trying to pass "bitcoin cash" as the prop. Similar errors occur with a few other coins.

#### To Do

* [ ] Add streaming Twitter component. *In Progress*
* [ ] Add portfolio *In Progress*
* [X] Add some news RSS feeds.
~~* [ ] Add more coin pages.~~
* [X] Simplify Chart component.
* [ ] Simplify styling, styled components.

#### Uses:
[Axios](https://github.com/axios/axios)

[Recharts](https://github.com/recharts/recharts)

[Reactstrap](https://github.com/reactstrap/reactstrap)

[React Custom Scrollbars](https://github.com/malte-wessel/react-custom-scrollbars)

[React Twitter Widget](https://github.com/andrewsuzuki/react-twitter-widgets)

[CoinMarketCap](https://coinmarketcap.com/api/)

[Reddit](https://www.reddit.com/dev/api)

[CryptoCompare](https://www.cryptocompare.com/api/)

![Coin Graph](img/coingraph.jpg?raw=true "Coin Graph")

![Coin Chart](img/coinchart.jpg?raw=true "Coin Chart")




