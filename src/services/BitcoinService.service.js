import axios from 'axios';
// import { storageService } from './storageService.service;

export default {
    getRate,
    // getMarketPrice,
    // getConfirmedTransactions
}

// const RATE_KEY = 'rate';
// var  gRateCache = storageService.load(RATE_KEY) || {};

async function getRate(coins) {
    const URL = 'https://blockchain.info/tobtc?currency=USD&value=' + coins
    // return await axios.get(URL)
    return Promise.resolve(0.00744842)
}