<h1 align="center">
  <br>
  <img src="">
  <br>
  CashFlow
  <br>
</h1>

<h4 align="center">⚡️ One Click, Multiple token swap for super easy mass off-ramping 💥</h4>

<p align="center">
  <a href="https://twitter.com/The_Game_2030">
    <img src="https://img.shields.io/badge/Reach_Agustin-On_Twitter-Green">
  </a>
  <a href="https://twitter.com/whoiskevin">
    <img src="https://img.shields.io/badge/Reach_Kevin-On_Twitter-Blue">
  </a>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#Short Description">Short Description</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#Inspirations">Inspirations</a> •
</p>

<img width="1084" alt="Screenshot 2023-07-20 at 10 54 12" src="https://github.com/Podima2/test/assets/116461333/8a019a79-3642-42d6-b2cb-28f82ebfc4fa">

## Key Features

* Batch sell multiple tokens into USDC on same network
  - E.g. Swap Cake, WMatic and Link for native USDC with `one click`
* Aggregated transaction and Slippage Control
* Native USDC bridge from source chain to destination chain through CCTP  
* Abstracted redeem USDC process thanks to WormHole Automatic relayers
  - I.e. Utilise Wormhole to deliver USDC to user wallet after destination chain USDC arrival
* React Front end utilising Three.js
* 1RPC https endpoints for CCTPxWormhole supported chains - maximise privacy during wallet-wide off-ramping
* Quick withdrawal, Potential Gas Savings and Ability to optimise transfer for speed vs cost
* Specific Ubeswap integration for liquidity enhancement on Celo Chain - Forward thinking accommodation of potential Roll-up layer 2 conversion.

## Short Description

Utilising the Dzap sdks, we can identify all the tokens in a connect wallet (supports metamask, walletconnect, talisman etc). We then allow the user to dictate which tokens in their wallet to be converted to USDC and their slippage tolerance. Dzap sdk natively calls 1inch, uniswap and sushiswap, Event Horizon integrates Ubeswap to allow integration of Celo chain. Then they select which wallet address and destination chain to receive the USDC. We use the CCTP and wormhole integration together with 1RPC https endpoints for Ethereum and Avalanche C-chain for the moment.

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/Podima2/Event-Horizon

# Go into the repository
$ cd Event-Horizon

# Install dependencies
$ npm install

# Run the app
$ npm start
```

> **Note**
> DZap SDK is not connected to front end in current version. DZap [swap](https://github.com/DZapIO/dzap-sdk), of multiple tokens should be fed into CCTPxWormhole swap mechanism. Additionally, Dzap sdks are not connected to CTTPxwormhole integration due to unknown network connection issues not regarding API connectivity in the nativeUSDC demo clone.

## FAQs

1) Why is this necessary?

Off-ramping for diversified token holders is a time-consuming and potentially frustrating process in particular during moments of high volatility. Simplifying the process is critical for onboarding more users from more catered environments in web2.

2) Why alter the circle/wormhole integration to remove the last swap from USDC to the destination chain native token?

We believe this actually allows for increased flexibility given native to USDC liquidity, therefore, should the user decide to continue swapping, they commence from a low-risk position. Additionally, by leveraging the ability to redeem USDC/USD 1-to-1, we are effectively creating a wallet-wide off-ramp mechanism. 

3) Why utilise 1RPC endpoints as opposed to other providers and why ethereum and avalanche C chain?

Other node providers such as Infura have been known to collect user information such as IP address, to maintain the ethos to right-of-privacy for Event Horizon users we believe they allign best with our values. With regards to ethereum and avalanche C chain specifically, these are two of the three networks supported by CCTP as of the present moment however we operate under the assumption that Native USDC will only continue to expand its interoperability and therefore the destination chains will become more diverse.

4) Whats the roadmap going forward?

Utilise RFQ based crosschain DEX's in combination with xDEX's to provide enhanced support for trading pairs across chains. This would replace the dependency on the Dzap sdks. Furthermore, including support for Arbitrum, the other supported network by CCTP. 


## Inspirations

These examples contributed to the creation of this project:

- [Dump.services](https://dump.services/)
- [DZap sdk](https://github.com/DZapIO/dzap-sdk)
- [Wormhole Circle Integration](https://github.com/wormhole-foundation/wormhole-circle-integration/tree/main)
- [USDC demo](https://github.com/sebastianscatularo/usdcdemo-web)
- [Ubeswap sdk](https://github.com/Ubeswap/ubeswap-sdk)


---

> GitHub [@Podima2](https://github.com/Podima2) &nbsp;&middot;&nbsp;
> Twitter [@The_Game_2030](https://twitter.com/The_Game_2030)
