# Venus Oracle

## Usage

### Prerequisites

- NodeJS - 12.x

- Solc - v0.8.13 (https://github.com/ethereum/solidity/releases/tag/v0.8.13)

### Installing

```

yarn install

```

### Linting and code formatting

Linting is done using eslint for typescript and solhint for solidity. Prettier is used to format solidity and typescript files.

To check linting and formatting on all files run:

```sh
$ yarn lint
```

Linting command can be run with the fix flag to fix eligible errors automatically

```sh
$ yarn lint:sol --fix
$ yarn lint:ts --fix
```

To pretty all files run:

```sh
$ yarn prettier
```

### Run Tests

```

npx hardhat test

```

- To run fork tests add FORK_MAINNET=true PRIVATE_KEY and QUICK_NODE_KEY in the .env file.

### Deployment

```

npx hardhat deploy

```

- This command will execute all the deployment scripts in `./deploy` directory
- The default network will be `hardhat`
- Deployment to another network: - Make sure the desired network is configured in `hardhat.config.ts` - Add `PRIVATE_KEY` variable in `.env` file - Execute deploy command by adding `--network <network_name>` in the deploy command above - E.g. `npx hardhat deploy --network bsctestnet`
- Execution of single or custom set of scripts is possible, if:
  - In the deployment scripts you have added `tags` for example: - `func.tags = ["MockTokens"];`
  - Once this is done, adding `--tags "<tag_name>,<tag_name>..."` to the deployment command will execute only the scripts containing the tags.

### Verify Contracts

```
npx hardhat etherscan-verify --network <network-name>
```

### Hardhat Commands

```

npx hardhat accounts

npx hardhat compile

npx hardhat clean

npx hardhat test

npx hardhat node

npx hardhat help

REPORT_GAS=true npx hardhat test

npx hardhat coverage

TS_NODE_FILES=true npx ts-node scripts/deploy.ts

npx eslint '**/*.{js,ts}'

npx eslint '**/*.{js,ts}' --fix

npx prettier '**/*.{json,sol,md}' --check

npx prettier '**/*.{json,sol,md}' --write

npx solhint 'contracts/**/*.sol'

npx solhint 'contracts/**/*.sol' --fix

```

### Documentation

Documentation is autogenerated using [solidity-docgen](https://github.com/OpenZeppelin/solidity-docgen).

They can be generated by running `yarn docgen`
