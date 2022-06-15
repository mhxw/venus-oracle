/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  BEP20Harness,
  BEP20HarnessInterface,
} from "../../../contracts/test/BEP20Harness";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
    ],
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
        name: "amount",
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
        name: "account",
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
    name: "decimalsInternal",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
        name: "amount",
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
        name: "amount",
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
  "0x60806040526005805460ff191660121790553480156200001e57600080fd5b5060405162000c0238038062000c02833981016040819052620000419162000204565b8251839083906200005a90600390602085019062000091565b5080516200007090600490602084019062000091565b50506005805460ff191660ff939093169290921790915550620002c5915050565b8280546200009f9062000289565b90600052602060002090601f016020900481019282620000c357600085556200010e565b82601f10620000de57805160ff19168380011785556200010e565b828001600101855582156200010e579182015b828111156200010e578251825591602001919060010190620000f1565b506200011c92915062000120565b5090565b5b808211156200011c576000815560010162000121565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200015f57600080fd5b81516001600160401b03808211156200017c576200017c62000137565b604051601f8301601f19908116603f01168101908282118183101715620001a757620001a762000137565b81604052838152602092508683858801011115620001c457600080fd5b600091505b83821015620001e85785820183015181830184015290820190620001c9565b83821115620001fa5760008385830101525b9695505050505050565b6000806000606084860312156200021a57600080fd5b83516001600160401b03808211156200023257600080fd5b62000240878388016200014d565b945060208601519150808211156200025757600080fd5b5062000266868287016200014d565b925050604084015160ff811681146200027e57600080fd5b809150509250925092565b600181811c908216806200029e57607f821691505b602082108103620002bf57634e487b7160e01b600052602260045260246000fd5b50919050565b61092d80620002d56000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c80634511bf6b11610081578063a457c2d71161005b578063a457c2d7146101a9578063a9059cbb146101bc578063dd62ed3e146101cf57600080fd5b80634511bf6b1461016b57806370a082311461017857806395d89b41146101a157600080fd5b806323b872dd116100b257806323b872dd1461012c578063313ce5671461013f578063395093511461015857600080fd5b806306fdde03146100d9578063095ea7b3146100f757806318160ddd1461011a575b600080fd5b6100e1610208565b6040516100ee9190610794565b60405180910390f35b61010a610105366004610805565b61029a565b60405190151581526020016100ee565b6002545b6040519081526020016100ee565b61010a61013a36600461082f565b6102b2565b60055460ff165b60405160ff90911681526020016100ee565b61010a610166366004610805565b6102d6565b6005546101469060ff1681565b61011e61018636600461086b565b6001600160a01b031660009081526020819052604090205490565b6100e1610315565b61010a6101b7366004610805565b610324565b61010a6101ca366004610805565b6103d3565b61011e6101dd36600461088d565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b606060038054610217906108c0565b80601f0160208091040260200160405190810160405280929190818152602001828054610243906108c0565b80156102905780601f1061026557610100808354040283529160200191610290565b820191906000526020600020905b81548152906001019060200180831161027357829003601f168201915b5050505050905090565b6000336102a88185856103e1565b5060019392505050565b6000336102c0858285610505565b6102cb858585610597565b506001949350505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102a890829086906103109087906108fa565b6103e1565b606060048054610217906108c0565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156103c65760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6102cb82868684036103e1565b6000336102a8818585610597565b6001600160a01b0383166104435760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103bd565b6001600160a01b0382166104a45760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103bd565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461059157818110156105845760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103bd565b61059184848484036103e1565b50505050565b6001600160a01b0383166106135760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016103bd565b6001600160a01b0382166106755760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103bd565b6001600160a01b038316600090815260208190526040902054818110156107045760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016103bd565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061073b9084906108fa565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161078791815260200190565b60405180910390a3610591565b600060208083528351808285015260005b818110156107c1578581018301518582016040015282016107a5565b818111156107d3576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461080057600080fd5b919050565b6000806040838503121561081857600080fd5b610821836107e9565b946020939093013593505050565b60008060006060848603121561084457600080fd5b61084d846107e9565b925061085b602085016107e9565b9150604084013590509250925092565b60006020828403121561087d57600080fd5b610886826107e9565b9392505050565b600080604083850312156108a057600080fd5b6108a9836107e9565b91506108b7602084016107e9565b90509250929050565b600181811c908216806108d457607f821691505b6020821081036108f457634e487b7160e01b600052602260045260246000fd5b50919050565b6000821982111561091b57634e487b7160e01b600052601160045260246000fd5b50019056fea164736f6c634300080d000a";

type BEP20HarnessConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BEP20HarnessConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BEP20Harness__factory extends ContractFactory {
  constructor(...args: BEP20HarnessConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    decimals_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BEP20Harness> {
    return super.deploy(
      name_,
      symbol_,
      decimals_,
      overrides || {}
    ) as Promise<BEP20Harness>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    decimals_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      decimals_,
      overrides || {}
    );
  }
  override attach(address: string): BEP20Harness {
    return super.attach(address) as BEP20Harness;
  }
  override connect(signer: Signer): BEP20Harness__factory {
    return super.connect(signer) as BEP20Harness__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BEP20HarnessInterface {
    return new utils.Interface(_abi) as BEP20HarnessInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BEP20Harness {
    return new Contract(address, _abi, signerOrProvider) as BEP20Harness;
  }
}