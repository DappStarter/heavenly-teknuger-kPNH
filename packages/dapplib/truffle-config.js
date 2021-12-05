require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb frown skull traffic develop remind million hidden inhale flush slab'; 
let testAccounts = [
"0x27b263faa7d4c53a21953754568c1784890f527bfdf814b7643af4c77b149841",
"0x2c0dce6eeee21e32fd5597fbf9a6b0cec7c36581e000a58080dd602eea6c8618",
"0x445f1659a78bb52930a2e4ba5d864a5a4c1195329510eb204fe7cad8a62520ac",
"0x2d596fa9dbcd452e4c09bfc3c2116a45c2244400a5ea31df1eff059f2023b044",
"0xdbc9828d4f6b37fec71637d27593622403f3dddeebff4f92b27025ea1118321c",
"0x366d038fb62d2844e1494884786ffa770680e81eaa5c04d4d442744f5350f3d9",
"0x57e9528a3962004875dcf772220f24ae381fd2cf2c82ad03b4646f3fca696b7a",
"0x474b17c2be3f986e95700c02754e1937ef78229078ef1e5ce061952bd25cb152",
"0x629eb24f22e84097c69ba0eeb310ce10011f0568c5dc908f6ff5b07957e7e9d1",
"0xe9bcf58a0dca35d341994c46044e744be2742a37d307ef337e2bf7c9a05444ef"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


