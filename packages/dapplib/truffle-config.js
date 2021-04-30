require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe frown ski stove dash situate unit gesture canoe army genuine'; 
let testAccounts = [
"0x7e2a03cd3ee2984d508debf2cc4056578bb42b92ebddb468365840d0bf2532b6",
"0x25cc6f3d7aa518cacc5d0e819fd0442858bdeae7b00b66704a28985894a1f54f",
"0xa3c2b0de03ea96c5740951599ffb218319b832f66baf24b8a393f436efcde35d",
"0xbfdac9060f589b106746c2375f09a670559dc8244e69eaeb8c2b16120af8f6f1",
"0xc859c879c8b5e8f0013848afa87d2aa58578e0d7fe0d6980787a82168fd886ba",
"0xb3fd21b7d21f55bdf9c91cc46d66a64f0402077332d63d37d433d5a3bed53ce3",
"0x6afc7f13c2591a3aef2d1413569b75bf527748bf22b33df98f74b85941a489d3",
"0x5f7809dc5d88e076e855b4ab10bf369cd8996277406d41dd59b137e8474b1c49",
"0xf8bf6a386426836ea5a509c63e745b1f1067f5eef9f5b8635df7fef2f5d11364",
"0xcabe38a875c8f5dc7990743e72bdb872030644611eae661ed7f454ba2dbf71ec"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

