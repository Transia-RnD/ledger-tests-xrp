# Ledger XRP App Contributing

## Building Tests

### Create the test fixture

First we need to create a new test fixture. We do this by creating a new folder in the `fixtures` directory with the XX- designation. 

We only need to create the .json file. 

```json
{
    "TransactionType": "NFTokenBurn",
    "Account": "OWN_ADDR",
    "Fee": "15",
    "Flags": 0,
    "NFTokenID": "000000003C0E955DFA24367806070434D8BE16A12E410C3B559CFBED00000052",
    "Sequence": 3,
    "SigningPubKey": "OWN_PUBKEY"
}
```

### Create the integration test

Now create the integration test to match the new fixtures you created. The tests are grouped by the feature. 

### Run Speculos and verify correct integration

Once you have successfully ran the integration test and confirmed the txn was successful on the standalone you can move the test fixture into the testcases.


## Clone Speculos Build & Push Speculos

Clone Speculos:
```sh
git clone git@github.com:LedgerHQ/speculos.git
```

Build docker on M1 (from root):
```sh
docker build -t speculos-builder:latest -f build.Dockerfile .
```

Edit Dockerfile and replace the first line with:

```sh
FROM speculos-builder:latest AS builder
```
then
```sh
docker build -t transia/speculos:M3 .
```

Push to docker hub

`docker push transia/speculos:M3`

## Running Swap Tests

```
docker run -it \
    --user 0 \
    -v "$(pwd)/build/nanos2/bin/app.elf:/app/build/nanos2/bin/app.elf" \
    -e NANOX_SDK \
    app-exchange-image \
    bash -c 'export BOLOS_SDK=$NANOX_SDK && bash'
```

```
sudo apt-get update && sudo apt-get install -y qemu-user-static tesseract-ocr libtesseract-dev
  pip install -U pip setuptools
  pip install -r "test/python/requirements.txt"
  if [[ -f test/python/setup_script.sh ]]; then
    ./test/python/setup_script.sh
  fi
```

```
pytest test/python/ \
         --tb=short -v \
         --device nanosp \
         -k "XRP or xrp or Ripple or ripple"
```