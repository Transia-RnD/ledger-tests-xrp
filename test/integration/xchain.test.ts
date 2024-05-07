import {
  LedgerTestContext,
  setupLedger,
  teardownLedger,
  testTransaction,
} from '../../dist/npm/src'
import {
  XrplIntegrationTestContext,
  setupClient,
  teardownClient,
} from '../../dist/npm/src/xrpl-helpers/setup'
import { close } from '../../dist/npm/src/xrpl-helpers/tools'
// xrpl-helpers

describe('XChainCreateBridge', () => {
  let ledgerContext: LedgerTestContext
  let testContext: XrplIntegrationTestContext

  beforeAll(async () => {
    testContext = await setupClient()
    ledgerContext = await setupLedger(testContext)
  })
  afterAll(async () => {
    teardownClient(testContext)
    teardownLedger(ledgerContext)
  })

  it('xchain create bridge - basic', async () => {
    const txBlob = await testTransaction(
      testContext,
      ledgerContext,
      'test/fixtures/XX-xchain-create/01-basic.json'
    )
    const response = await testContext.client.submit(txBlob)
    expect(response.result.engine_result).toMatch('tesSUCCESS')
    await close(testContext.client)
  })
  it('xchain create bridge - currency', async () => {
    const txBlob = await testTransaction(
      testContext,
      ledgerContext,
      'test/fixtures/XX-xchain-create/02-currency.json'
    )
    const response = await testContext.client.submit(txBlob)
    expect(response.result.engine_result).toMatch('tesSUCCESS')
    await close(testContext.client)
  })
})

// describe('XChainModifyBridge', () => {
//   let ledgerContext: LedgerTestContext
//   let testContext: XrplIntegrationTestContext

//   beforeAll(async () => {
//     testContext = await setupClient()
//     ledgerContext = await setupLedger(testContext)
//   })
//   afterAll(async () => {
//     teardownClient(testContext)
//     teardownLedger(ledgerContext)
//   })

//   it('xchain modify bridge - basic', async () => {
//     const txBlob = await testTransaction(
//       testContext,
//       ledgerContext,
//       'test/fixtures/XX-xchain-modify/01-basic.json'
//     )
//     const response = await testContext.client.submit(txBlob)
//     expect(response.result.engine_result).toMatch('tesSUCCESS')
//     await close(testContext.client)
//   })
// })

// describe('XChainAccountCreateCommit', () => {
//   let ledgerContext: LedgerTestContext
//   let testContext: XrplIntegrationTestContext

//   beforeAll(async () => {
//     testContext = await setupClient()
//     ledgerContext = await setupLedger(testContext)
//   })
//   afterAll(async () => {
//     teardownClient(testContext)
//     teardownLedger(ledgerContext)
//   })

//   it('xchain create commit - basic', async () => {
//     const txBlob = await testTransaction(
//       testContext,
//       ledgerContext,
//       'test/fixtures/XX-xchain-create-commit/01-basic.json'
//     )
//     const response = await testContext.client.submit(txBlob)
//     expect(response.result.engine_result).toMatch('tesSUCCESS')
//     await close(testContext.client)
//   })
// })
