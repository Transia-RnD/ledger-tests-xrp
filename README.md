# XRP Wallet App Test Suite

This utility is designed for testing the functionality of the [ledger-app-xrp](https://github.com/LedgerHQ/ledger-app-xrp), specifically targeting the Ledger Nano S and Ledger Nano X devices.

## Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed on your system.
- Docker is required for running Speculos, a Ledger app emulator.

## Setup

### Installation

1. Clone the repository:
   ```sh
   git clone git@github.com:Transia-RnD/app-xrp.git
   cd app-xrp
   ```

2. Install the package dependencies:
   ```sh
   yarn install
   ```

## Running Tests

### Unit Tests

To execute the unit test suite, run:
```sh
yarn run test:unit
```

### Integration Tests

#### Standalone Network

1. Start the standalone network:
   ```sh
   xrpld-netgen up:standalone --protocol=xrpl --network_id=1
   ```

2. Run the integration tests:
   ```sh
   yarn run test:integration
   ```

### Running a Subset of Tests

To run specific tests, provide the path to the test file(s) you wish to execute:
```sh
yarn run test:integration test/integration/invoke.test.ts
```

## Building the XRP Ledger App

### Resources

- [Ledger App Boilerplate](https://github.com/LedgerHQ/app-boilerplate)
- [Ledger Developer Documentation](https://developers.ledger.com/docs/embedded-app/build-load/)

### Steps

1. Clone the App-XRP repository:
   ```sh
   git clone git@github.com:Transia-RnD/app-xrp.git
   ```

2. Install the Ledger VS Code extension for building the app.

3. Update settings for `app-xrp` and `nanox` as needed.

## Running App-XRP with Speculos

1. Build the App-XRP using the Ledger VS Code extension.

2. Run Speculos from the `app-xrp` directory root:
   ```sh
   docker run --rm -it -v $(pwd)/bin:/speculos/apps --publish 40000:40000 --publish 41000:41000 --publish 5001:5001 transia/speculos:M3 --display headless --vnc-port 41000 --api-port 5001 --apdu-port 40000 --model nanox --seed "glory promote mansion idle axis finger extra february uncover one trip resource lawn turtle enact monster seven myth punch hobby comfort wild raise skin" apps/app.elf
   ```

3. Access the Speculos interface via your browser at: [http://localhost:5001](http://localhost:5001)