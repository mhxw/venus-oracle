/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  VenusOracle,
  VenusOracleInterface,
} from "../../contracts/VenusOracle";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bool",
        name: "isEnable",
        type: "bool",
      },
    ],
    name: "GlobalEnable",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "vToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "role",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "enable",
        type: "bool",
      },
    ],
    name: "OracleEnabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "vToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oracle",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "role",
        type: "uint256",
      },
    ],
    name: "OracleSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "mainOracle",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "pivotOracle",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "fallbackOracle",
        type: "address",
      },
    ],
    name: "TokenConfigAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "INVALID_PRICE",
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
        name: "vToken",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address[3]",
            name: "oracles",
            type: "address[3]",
          },
          {
            internalType: "bool[3]",
            name: "enableFlagsForOracles",
            type: "bool[3]",
          },
        ],
        internalType: "struct VenusOracle.TokenConfig",
        name: "tokenConfig",
        type: "tuple",
      },
    ],
    name: "addTokenConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "vTokens",
        type: "address[]",
      },
      {
        components: [
          {
            internalType: "address[3]",
            name: "oracles",
            type: "address[3]",
          },
          {
            internalType: "bool[3]",
            name: "enableFlagsForOracles",
            type: "bool[3]",
          },
        ],
        internalType: "struct VenusOracle.TokenConfig[]",
        name: "tokenConfigs_",
        type: "tuple[]",
      },
    ],
    name: "addTokenConfigs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "vToken",
        type: "address",
      },
      {
        internalType: "enum VenusOracle.OracleRole",
        name: "role",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "enable",
        type: "bool",
      },
    ],
    name: "enableOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "vToken",
        type: "address",
      },
      {
        internalType: "enum VenusOracle.OracleRole",
        name: "role",
        type: "uint8",
      },
    ],
    name: "getOracle",
    outputs: [
      {
        internalType: "address",
        name: "oracle",
        type: "address",
      },
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "vToken",
        type: "address",
      },
    ],
    name: "getTokenConfig",
    outputs: [
      {
        components: [
          {
            internalType: "address[3]",
            name: "oracles",
            type: "address[3]",
          },
          {
            internalType: "bool[3]",
            name: "enableFlagsForOracles",
            type: "bool[3]",
          },
        ],
        internalType: "struct VenusOracle.TokenConfig",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "vToken",
        type: "address",
      },
    ],
    name: "getUnderlyingPrice",
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
    name: "owner",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "vToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "oracle",
        type: "address",
      },
      {
        internalType: "enum VenusOracle.OracleRole",
        name: "role",
        type: "uint8",
      },
    ],
    name: "setOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361002c565b6000805460ff60a01b1916905561007c565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6117608061008b6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80638b855da41161008c578063cb67e3b111610066578063cb67e3b1146101c7578063e6d57131146101e7578063f2fde38b146101fa578063fc57d4df1461020d57600080fd5b80638b855da4146101675780638da5cb5b14610199578063a6b1344a146101b457600080fd5b80634bf39cba116100c85780634bf39cba1461011f5780635c975abb1461013a578063715018a6146101575780638456cb591461015f57600080fd5b80632ea3cc29146100ef5780633f4ba83a146101045780634b932b8f1461010c575b600080fd5b6101026100fd3660046113ec565b610220565b005b61010261042a565b61010261011a36600461142f565b61048e565b610127600081565b6040519081526020015b60405180910390f35b600054600160a01b900460ff166040519015158152602001610131565b610102610654565b6101026106b8565b61017a610175366004611476565b61071a565b604080516001600160a01b039093168352901515602083015201610131565b6000546040516001600160a01b039091168152602001610131565b6101026101c23660046114a0565b6107b9565b6101da6101d53660046114e3565b610a2d565b6040516101319190611505565b6101026101f536600461160a565b610aec565b6101026102083660046114e3565b610c47565b61012761021b3660046114e3565b610d29565b6000546001600160a01b0316331461027f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b816001600160a01b0381166102ce5760405162461bcd60e51b815260206004820152601560248201527463616e2774206265207a65726f206164647265737360581b6044820152606401610276565b8151516001600160a01b03811661031f5760405162461bcd60e51b815260206004820152601560248201527463616e2774206265207a65726f206164647265737360581b6044820152606401610276565b6001600160a01b03848116600090815260016020526040812054869216801561038a5760405162461bcd60e51b815260206004820152601b60248201527f746f6b656e20636f6e666967206d757374206e6f7420657869737400000000006044820152606401610276565b6001600160a01b038716600090815260016020526040902086518791906103b4908290600361110d565b5060208201516103ca9060038084019190611172565b50508651602080820151825160409384015193516001600160a01b03948516815291841694508316928b16917fa51ad01e2270c314a7b78f0c60fe66c723f2d06c121d63fcdce776e654878fc1910160405180910390a450505050505050565b6000546001600160a01b031633146104845760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610276565b61048c610deb565b565b6000546001600160a01b031633146104e85760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610276565b826001600160a01b0381166105375760405162461bcd60e51b815260206004820152601560248201527463616e2774206265207a65726f206164647265737360581b6044820152606401610276565b6001600160a01b03848116600090815260016020819052604090912054869216806105a45760405162461bcd60e51b815260206004820152601760248201527f746f6b656e20636f6e666967206d7573742065786973740000000000000000006044820152606401610276565b6001600160a01b038716600090815260016020526040902085906003018760028111156105d3576105d36116ca565b600381106105e3576105e36116e0565b602091828204019190066101000a81548160ff021916908315150217905550841515866002811115610617576106176116ca565b6040516001600160a01b038a16907fcf3cad1ec87208efbde5d82a0557484a78d4182c3ad16926a5463bc1f7234b3d90600090a450505050505050565b6000546001600160a01b031633146106ae5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610276565b61048c6000610e91565b6000546001600160a01b031633146107125760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610276565b61048c610eee565b6001600160a01b03821660009081526001602052604081208190836002811115610746576107466116ca565b60038110610756576107566116e0565b01546001600160a01b0385811660009081526001602052604090209116925060030183600281111561078a5761078a6116ca565b6003811061079a5761079a6116e0565b602091828204019190069054906101000a900460ff1690509250929050565b6000546001600160a01b031633146108135760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610276565b826001600160a01b0381166108625760405162461bcd60e51b815260206004820152601560248201527463616e2774206265207a65726f206164647265737360581b6044820152606401610276565b6001600160a01b03848116600090815260016020819052604090912054869216806108cf5760405162461bcd60e51b815260206004820152601760248201527f746f6b656e20636f6e666967206d7573742065786973740000000000000000006044820152606401610276565b6001600160a01b0386161580156108f7575060008560028111156108f5576108f56116ca565b145b1561096a5760405162461bcd60e51b815260206004820152602560248201527f63616e277420736574207a65726f206164647265737320746f206d61696e206f60448201527f7261636c650000000000000000000000000000000000000000000000000000006064820152608401610276565b6001600160a01b03871660009081526001602052604090208690866002811115610996576109966116ca565b600381106109a6576109a66116e0565b01805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03929092169190911790558460028111156109e4576109e46116ca565b866001600160a01b0316886001600160a01b03167fea681d3efb830ef032a9c29a7215b5ceeeb546250d2c463dbf87817aecda1bf160405160405180910390a450505050505050565b610a356111ff565b6001600160a01b03821660009081526001602052604090819020815160a08101835291829081018260038282826020028201915b81546001600160a01b03168152600190910190602001808311610a6957505050918352505060408051606081019182905260209092019190600384810191826000855b825461010083900a900460ff161515815260206001928301818104948501949093039092029101808411610aac5790505050505050815250509050919050565b6000546001600160a01b03163314610b465760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610276565b8051825114610b975760405162461bcd60e51b815260206004820152601460248201527f6c656e67746820646f65736e2774206d617463680000000000000000000000006044820152606401610276565b8151600003610be85760405162461bcd60e51b815260206004820152601160248201527f6c656e6774682063616e277420626520300000000000000000000000000000006044820152606401610276565b60005b8251811015610c4257610c30838281518110610c0957610c096116e0565b6020026020010151838381518110610c2357610c236116e0565b6020026020010151610220565b80610c3a816116f6565b915050610beb565b505050565b6000546001600160a01b03163314610ca15760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610276565b6001600160a01b038116610d1d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610276565b610d2681610e91565b50565b600080610d3583610f83565b9050600080610d4585600261071a565b91509150600083148015610d565750805b8015610d6a57506001600160a01b03821615155b15610de25760405163fc57d4df60e01b81526001600160a01b03868116600483015283169063fc57d4df90602401602060405180830381865afa158015610db5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dd9919061171d565b95945050505050565b50909392505050565b600054600160a01b900460ff16610e445760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610276565b6000805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600054600160a01b900460ff1615610f485760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a20706175736564000000000000000000000000000000006044820152606401610276565b6000805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610e743390565b60008054600160a01b900460ff1615610f9e57506000919050565b600080610fac84600061071a565b909250905060006001600160a01b0383161580610fc7575081155b15610fd457949350505050565b60405163fc57d4df60e01b81526001600160a01b03868116600483015284169063fc57d4df90602401602060405180830381865afa15801561101a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061103e919061171d565b905060008061104e87600161071a565b90925090506001600160a01b0382161580611067575080155b1561107757509095945050505050565b60405163fd45a43360e01b81526001600160a01b038881166004830152602482018590526000919084169063fd45a43390604401602060405180830381865afa1580156110c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110ec9190611736565b90508061110157506000979650505050505050565b50919695505050505050565b8260038101928215611162579160200282015b82811115611162578251825473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03909116178255602090920191600190910190611120565b5061116e929150611224565b5090565b6001830191839082156111625791602002820160005b838211156111c557835183826101000a81548160ff0219169083151502179055509260200192600101602081600001049283019260010302611188565b80156111f25782816101000a81549060ff02191690556001016020816000010492830192600103026111c5565b505061116e929150611224565b6040518060400160405280611212611239565b815260200161121f611239565b905290565b5b8082111561116e5760008155600101611225565b60405180606001604052806003906020820280368337509192915050565b80356001600160a01b038116811461126e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156112ac576112ac611273565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156112db576112db611273565b604052919050565b8015158114610d2657600080fd5b600082601f83011261130257600080fd5b61130a611289565b80606084018581111561131c57600080fd5b845b8181101561133f578035611331816112e3565b84526020938401930161131e565b509095945050505050565b600060c0828403121561135c57600080fd5b6040516040810181811067ffffffffffffffff8211171561137f5761137f611273565b604052905080601f8301841361139457600080fd5b61139c611289565b8060608501868111156113ae57600080fd5b855b818110156113cf576113c181611257565b8452602093840193016113b0565b508184526113dd87826112f1565b60208501525050505092915050565b60008060e083850312156113ff57600080fd5b61140883611257565b9150611417846020850161134a565b90509250929050565b80356003811061126e57600080fd5b60008060006060848603121561144457600080fd5b61144d84611257565b925061145b60208501611420565b9150604084013561146b816112e3565b809150509250925092565b6000806040838503121561148957600080fd5b61149283611257565b915061141760208401611420565b6000806000606084860312156114b557600080fd5b6114be84611257565b92506114cc60208501611257565b91506114da60408501611420565b90509250925092565b6000602082840312156114f557600080fd5b6114fe82611257565b9392505050565b815160c08201908260005b60038110156115385782516001600160a01b0316825260209283019290910190600101611510565b5050506020808401516060840160005b6003811015611567578251151582529183019190830190600101611548565b5050505092915050565b600067ffffffffffffffff82111561158b5761158b611273565b5060051b60200190565b600082601f8301126115a657600080fd5b813560206115bb6115b683611571565b6112b2565b82815260c092830285018201928282019190878511156115da57600080fd5b8387015b858110156115fd576115f0898261134a565b84529284019281016115de565b5090979650505050505050565b6000806040838503121561161d57600080fd5b823567ffffffffffffffff8082111561163557600080fd5b818501915085601f83011261164957600080fd5b813560206116596115b683611571565b82815260059290921b8401810191818101908984111561167857600080fd5b948201945b8386101561169d5761168e86611257565b8252948201949082019061167d565b965050860135925050808211156116b357600080fd5b506116c085828601611595565b9150509250929050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b60006001820161171657634e487b7160e01b600052601160045260246000fd5b5060010190565b60006020828403121561172f57600080fd5b5051919050565b60006020828403121561174857600080fd5b81516114fe816112e356fea164736f6c634300080d000a";

type VenusOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VenusOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VenusOracle__factory extends ContractFactory {
  constructor(...args: VenusOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<VenusOracle> {
    return super.deploy(overrides || {}) as Promise<VenusOracle>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): VenusOracle {
    return super.attach(address) as VenusOracle;
  }
  override connect(signer: Signer): VenusOracle__factory {
    return super.connect(signer) as VenusOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VenusOracleInterface {
    return new utils.Interface(_abi) as VenusOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VenusOracle {
    return new Contract(address, _abi, signerOrProvider) as VenusOracle;
  }
}