/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  UniswapV2Pair,
  UniswapV2PairInterface,
} from "../../../../contracts/test/PancakePair.sol/UniswapV2Pair";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Swap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve0",
        type: "uint112",
      },
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve1",
        type: "uint112",
      },
    ],
    name: "Sync",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINIMUM_LIQUIDITY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getReserves",
    outputs: [
      {
        internalType: "uint112",
        name: "_reserve0",
        type: "uint112",
      },
      {
        internalType: "uint112",
        name: "_reserve1",
        type: "uint112",
      },
      {
        internalType: "uint32",
        name: "_blockTimestampLast",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token1",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "kLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "price0CumulativeLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price1CumulativeLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "skim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sync",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token0",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token1",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526001600c5534801561001557600080fd5b50604080518082018252600a8152692ab734b9bbb0b8102b1960b11b6020918201528151808301835260018152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f918101919091527fbfcc8ef98ffbf7b6c3fec7bf5185b566b9863e35a9d83acd49ad6824b5969738918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160408051601f198184030181529190528051602090910120600355600580546001600160a01b031916331790556121f78061010e6000396000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c80636a627842116100f9578063ba9a7a5611610097578063d21220a711610071578063d21220a714610449578063d505accf1461045c578063dd62ed3e1461046f578063fff6cae91461049a57600080fd5b8063ba9a7a561461041a578063bc25cf7714610423578063c45a01551461043657600080fd5b80637ecebe00116100d35780637ecebe001461038357806389afcb44146103a357806395d89b41146103cb578063a9059cbb1461040757600080fd5b80636a6278421461034757806370a082311461035a5780637464fc3d1461037a57600080fd5b806323b872dd116101665780633644e515116101405780633644e51514610319578063485cc955146103225780635909c0d5146103355780635a3d54931461033e57600080fd5b806323b872dd146102c557806330adf81f146102d8578063313ce567146102ff57600080fd5b8063095ea7b311610197578063095ea7b3146102605780630dfe16811461028357806318160ddd146102ae57600080fd5b8063022c0d9f146101be57806306fdde03146101d35780630902f1ac14610225575b600080fd5b6101d16101cc366004611de6565b6104a2565b005b61020f6040518060400160405280600a81526020017f556e69737761702056320000000000000000000000000000000000000000000081525081565b60405161021c9190611eac565b60405180910390f35b600854604080516001600160701b038084168252600160701b8404166020820152600160e01b90920463ffffffff169082015260600161021c565b61027361026e366004611edf565b610a33565b604051901515815260200161021c565b600654610296906001600160a01b031681565b6040516001600160a01b03909116815260200161021c565b6102b760005481565b60405190815260200161021c565b6102736102d3366004611f0b565b610a49565b6102b77f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b610307601281565b60405160ff909116815260200161021c565b6102b760035481565b6101d1610330366004611f4c565b610ac3565b6102b760095481565b6102b7600a5481565b6102b7610355366004611f85565b610b63565b6102b7610368366004611f85565b60016020526000908152604090205481565b6102b7600b5481565b6102b7610391366004611f85565b60046020526000908152604090205481565b6103b66103b1366004611f85565b610e76565b6040805192835260208301919091520161021c565b61020f6040518060400160405280600681526020017f554e492d5632000000000000000000000000000000000000000000000000000081525081565b610273610415366004611edf565b611224565b6102b76103e881565b6101d1610431366004611f85565b611231565b600554610296906001600160a01b031681565b600754610296906001600160a01b031681565b6101d161046a366004611fa2565b611368565b6102b761047d366004611f4c565b600260209081526000928352604080842090915290825290205481565b6101d1611587565b600c546001146104ed5760405162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b60448201526064015b60405180910390fd5b6000600c55841515806105005750600084115b6105725760405162461bcd60e51b815260206004820152602560248201527f556e697377617056323a20494e53554646494349454e545f4f55545055545f4160448201527f4d4f554e5400000000000000000000000000000000000000000000000000000060648201526084016104e4565b6000806105a36008546001600160701b0380821692600160701b83049091169163ffffffff600160e01b9091041690565b5091509150816001600160701b0316871080156105c85750806001600160701b031686105b61061e5760405162461bcd60e51b815260206004820152602160248201527f556e697377617056323a20494e53554646494349454e545f4c495155494449546044820152605960f81b60648201526084016104e4565b60065460075460009182916001600160a01b0391821691908116908916821480159061065c5750806001600160a01b0316896001600160a01b031614155b6106a85760405162461bcd60e51b815260206004820152601560248201527f556e697377617056323a20494e56414c49445f544f000000000000000000000060448201526064016104e4565b8a156106b9576106b9828a8d6116cf565b89156106ca576106ca818a8c6116cf565b8615610737576040516304347a1760e21b81526001600160a01b038a16906310d1e85c906107049033908f908f908e908e90600401612019565b600060405180830381600087803b15801561071e57600080fd5b505af1158015610732573d6000803e3d6000fd5b505050505b6040516370a0823160e01b81523060048201526001600160a01b038316906370a0823190602401602060405180830381865afa15801561077b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079f9190612066565b6040516370a0823160e01b81523060048201529094506001600160a01b038216906370a0823190602401602060405180830381865afa1580156107e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061080a9190612066565b92505050600089856001600160701b03166108259190612095565b831161083257600061084f565b6108458a6001600160701b038716612095565b61084f9084612095565b905060006108668a6001600160701b038716612095565b8311610873576000610890565b6108868a6001600160701b038716612095565b6108909084612095565b905060008211806108a15750600081115b6108f95760405162461bcd60e51b8152602060048201526024808201527f556e697377617056323a20494e53554646494349454e545f494e5055545f414d60448201526313d5539560e21b60648201526084016104e4565b60006109068360036120ac565b610912866103e86120ac565b61091c9190612095565b9050600061092b8360036120ac565b610937866103e86120ac565b6109419190612095565b90506109596001600160701b03808916908a166120ac565b61096690620f42406120ac565b61097082846120ac565b10156109be5760405162461bcd60e51b815260206004820152600c60248201527f556e697377617056323a204b000000000000000000000000000000000000000060448201526064016104e4565b50506109cc848488886117ea565b60408051838152602081018390529081018c9052606081018b90526001600160a01b038a169033907fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229060800160405180910390a350506001600c55505050505050505050565b6000610a403384846119c4565b50600192915050565b6001600160a01b038316600090815260026020908152604080832033845290915281205460001914610aae576001600160a01b038416600090815260026020908152604080832033845290915281208054849290610aa8908490612095565b90915550505b610ab9848484611a26565b5060019392505050565b6005546001600160a01b03163314610b1d5760405162461bcd60e51b815260206004820152601460248201527f556e697377617056323a20464f5242494444454e00000000000000000000000060448201526064016104e4565b600680546001600160a01b039384167fffffffffffffffffffffffff00000000000000000000000000000000000000009182161790915560078054929093169116179055565b6000600c54600114610bab5760405162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b60448201526064016104e4565b6000600c819055600854600654604080516370a0823160e01b815230600482015290516001600160701b0380851695600160701b9095041693926001600160a01b0316916370a082319160248083019260209291908290030181865afa158015610c19573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c3d9190612066565b6007546040516370a0823160e01b81523060048201529192506000916001600160a01b03909116906370a0823190602401602060405180830381865afa158015610c8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610caf9190612066565b90506000610cc66001600160701b03861684612095565b90506000610cdd6001600160701b03861684612095565b90506000610ceb8787611ac7565b60008054919250819003610d2c576103e8610d0e610d0985876120ac565b611c06565b610d189190612095565b9850610d2760006103e8611c76565b610d73565b610d706001600160701b038916610d4383876120ac565b610d4d91906120e1565b6001600160701b038916610d6184876120ac565b610d6b91906120e1565b611cff565b98505b60008911610de95760405162461bcd60e51b815260206004820152602860248201527f556e697377617056323a20494e53554646494349454e545f4c4951554944495460448201527f595f4d494e54454400000000000000000000000000000000000000000000000060648201526084016104e4565b610df38a8a611c76565b610dff86868a8a6117ea565b8115610e2857600854610e24906001600160701b03600160701b8204811691166120ac565b600b555b604080518581526020810185905233917f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f910160405180910390a250506001600c5550949695505050505050565b600080600c54600114610ebf5760405162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b60448201526064016104e4565b6000600c819055600854600654600754604080516370a0823160e01b815230600482015290516001600160701b0380861696600160701b90960416946001600160a01b0394851694909316929184916370a08231916024808201926020929091908290030181865afa158015610f39573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f5d9190612066565b6040516370a0823160e01b81523060048201529091506000906001600160a01b038416906370a0823190602401602060405180830381865afa158015610fa7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fcb9190612066565b30600090815260016020526040812054919250610fe88888611ac7565b60005490915080610ff986856120ac565b61100391906120e1565b9a508061101085856120ac565b61101a91906120e1565b995060008b11801561102c575060008a115b61109e5760405162461bcd60e51b815260206004820152602860248201527f556e697377617056323a20494e53554646494349454e545f4c4951554944495460448201527f595f4255524e454400000000000000000000000000000000000000000000000060648201526084016104e4565b6110a83084611d17565b6110b3878d8d6116cf565b6110be868d8c6116cf565b6040516370a0823160e01b81523060048201526001600160a01b038816906370a0823190602401602060405180830381865afa158015611102573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111269190612066565b6040516370a0823160e01b81523060048201529095506001600160a01b038716906370a0823190602401602060405180830381865afa15801561116d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111919190612066565b935061119f85858b8b6117ea565b81156111c8576008546111c4906001600160701b03600160701b8204811691166120ac565b600b555b604080518c8152602081018c90526001600160a01b038e169133917fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496910160405180910390a35050505050505050506001600c81905550915091565b6000610a40338484611a26565b600c546001146112775760405162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b60448201526064016104e4565b6000600c556006546007546008546040516370a0823160e01b81523060048201526001600160a01b03938416939092169161131691849186916001600160701b03169083906370a08231906024015b602060405180830381865afa1580156112e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113079190612066565b6113119190612095565b6116cf565b6008546040516370a0823160e01b815230600482015261135e9183918691600160701b90046001600160701b0316906001600160a01b038416906370a08231906024016112c6565b50506001600c5550565b428410156113b85760405162461bcd60e51b815260206004820152601260248201527f556e697377617056323a2045585049524544000000000000000000000000000060448201526064016104e4565b6003546001600160a01b038816600090815260046020526040812080549192917f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9918b918b918b91908761140b836120f5565b909155506040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810187905260e0016040516020818303038152906040528051906020012060405160200161148492919061190160f01b81526002810192909252602282015260420190565b60408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156114ef573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906115255750886001600160a01b0316816001600160a01b0316145b6115715760405162461bcd60e51b815260206004820152601c60248201527f556e697377617056323a20494e56414c49445f5349474e41545552450000000060448201526064016104e4565b61157c8989896119c4565b505050505050505050565b600c546001146115cd5760405162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b60448201526064016104e4565b6000600c556006546040516370a0823160e01b81523060048201526116c8916001600160a01b0316906370a0823190602401602060405180830381865afa15801561161c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116409190612066565b6007546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa158015611688573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116ac9190612066565b6008546001600160701b0380821691600160701b9004166117ea565b6001600c55565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283929087169161172b919061210e565b6000604051808303816000865af19150503d8060008114611768576040519150601f19603f3d011682016040523d82523d6000602084013e61176d565b606091505b5091509150818015611797575080511580611797575080806020019051810190611797919061212a565b6117e35760405162461bcd60e51b815260206004820152601a60248201527f556e697377617056323a205452414e534645525f4641494c454400000000000060448201526064016104e4565b5050505050565b6001600160701b03841180159061180857506001600160701b038311155b6118545760405162461bcd60e51b815260206004820152601360248201527f556e697377617056323a204f564552464c4f570000000000000000000000000060448201526064016104e4565b60006118656401000000004261214c565b60085490915063ffffffff600160e01b909104811682039081161580159061189557506001600160701b03841615155b80156118a957506001600160701b03831615155b15611914578063ffffffff166118d1856118c286611d9a565b6001600160e01b031690611db9565b600980546001600160e01b03929092169290920201905563ffffffff81166118fc846118c287611d9a565b600a80546001600160e01b0392909216929092020190555b506008805463ffffffff8316600160e01b026001600160e01b036001600160701b03888116600160701b9081027fffffffff000000000000000000000000000000000000000000000000000000009095168b83161794909417918216831794859055604080519382169282169290921783529290930490911660208201527f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1910160405180910390a15050505050565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b03831660009081526001602052604081208054839290611a4e908490612095565b90915550506001600160a01b03821660009081526001602052604081208054839290611a7b908490612160565b92505081905550816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611a1991815260200190565b600080600560009054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b8152600401602060405180830381865afa158015611b1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b419190612178565b600b546001600160a01b038216158015945091925090611bf2578015611bed576000611b7c610d096001600160701b038088169089166120ac565b90506000611b8983611c06565b905080821115611bea576000611b9f8284612095565b600054611bac91906120ac565b9050600082611bbc8560056120ac565b611bc69190612160565b90506000611bd482846120e1565b90508015611be657611be68782611c76565b5050505b50505b611bfe565b8015611bfe576000600b555b505092915050565b60006003821115611c675750806000611c206002836120e1565b611c2b906001612160565b90505b81811015611c6157905080600281611c4681866120e1565b611c509190612160565b611c5a91906120e1565b9050611c2e565b50919050565b8115611c71575060015b919050565b80600080828254611c879190612160565b90915550506001600160a01b03821660009081526001602052604081208054839290611cb4908490612160565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020015b60405180910390a35050565b6000818310611d0e5781611d10565b825b9392505050565b6001600160a01b03821660009081526001602052604081208054839290611d3f908490612095565b9250508190555080600080828254611d579190612095565b90915550506040518181526000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001611cf3565b6000611db3600160701b6001600160701b038416612195565b92915050565b6000611d106001600160701b038316846121c4565b6001600160a01b0381168114611de357600080fd5b50565b600080600080600060808688031215611dfe57600080fd5b85359450602086013593506040860135611e1781611dce565b9250606086013567ffffffffffffffff80821115611e3457600080fd5b818801915088601f830112611e4857600080fd5b813581811115611e5757600080fd5b896020828501011115611e6957600080fd5b9699959850939650602001949392505050565b60005b83811015611e97578181015183820152602001611e7f565b83811115611ea6576000848401525b50505050565b6020815260008251806020840152611ecb816040850160208701611e7c565b601f01601f19169190910160400192915050565b60008060408385031215611ef257600080fd5b8235611efd81611dce565b946020939093013593505050565b600080600060608486031215611f2057600080fd5b8335611f2b81611dce565b92506020840135611f3b81611dce565b929592945050506040919091013590565b60008060408385031215611f5f57600080fd5b8235611f6a81611dce565b91506020830135611f7a81611dce565b809150509250929050565b600060208284031215611f9757600080fd5b8135611d1081611dce565b600080600080600080600060e0888a031215611fbd57600080fd5b8735611fc881611dce565b96506020880135611fd881611dce565b95506040880135945060608801359350608088013560ff81168114611ffc57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6001600160a01b038616815284602082015283604082015260806060820152816080820152818360a0830137600081830160a090810191909152601f909201601f19160101949350505050565b60006020828403121561207857600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000828210156120a7576120a761207f565b500390565b60008160001904831182151516156120c6576120c661207f565b500290565b634e487b7160e01b600052601260045260246000fd5b6000826120f0576120f06120cb565b500490565b6000600182016121075761210761207f565b5060010190565b60008251612120818460208701611e7c565b9190910192915050565b60006020828403121561213c57600080fd5b81518015158114611d1057600080fd5b60008261215b5761215b6120cb565b500690565b600082198211156121735761217361207f565b500190565b60006020828403121561218a57600080fd5b8151611d1081611dce565b60006001600160e01b03808316818516818304811182151516156121bb576121bb61207f565b02949350505050565b60006001600160e01b03808416806121de576121de6120cb565b9216919091049291505056fea164736f6c634300080d000a";

type UniswapV2PairConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapV2PairConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapV2Pair__factory extends ContractFactory {
  constructor(...args: UniswapV2PairConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UniswapV2Pair> {
    return super.deploy(overrides || {}) as Promise<UniswapV2Pair>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UniswapV2Pair {
    return super.attach(address) as UniswapV2Pair;
  }
  override connect(signer: Signer): UniswapV2Pair__factory {
    return super.connect(signer) as UniswapV2Pair__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV2PairInterface {
    return new utils.Interface(_abi) as UniswapV2PairInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV2Pair {
    return new Contract(address, _abi, signerOrProvider) as UniswapV2Pair;
  }
}
