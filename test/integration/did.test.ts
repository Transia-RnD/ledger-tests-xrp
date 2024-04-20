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

describe('DIDSet', () => {
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

  it('did set - basic', async () => {
    const txBlob = await testTransaction(
      testContext,
      ledgerContext,
      'test/fixtures/XX-did-set/01-basic.json'
    )
    const response = await testContext.client.submit(txBlob)
    expect(response.result.engine_result).toMatch('tesSUCCESS')
    await close(testContext.client)
  })
})

describe('DIDDelete', () => {
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

  it('did delete - basic', async () => {
    const txBlob = await testTransaction(
      testContext,
      ledgerContext,
      'test/fixtures/XX-did-delete/01-basic.json'
    )
    const response = await testContext.client.submit(txBlob)
    expect(response.result.engine_result).toMatch('tesSUCCESS')
    await close(testContext.client)
  })
})
