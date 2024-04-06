import {
  LedgerTestContext,
  setupLedger,
  teardownLedger,
  testTransaction,
} from '../../dist/npm/src'
// xrpl-helpers
import {
  XrplIntegrationTestContext,
  setupClient,
  teardownClient,
  serverUrl,
  close,
} from '@transia/hooks-toolkit/dist/npm/src/libs/xrpl-helpers'

describe('NFTokenMint', () => {
  let ledgerContext: LedgerTestContext
  let testContext: XrplIntegrationTestContext

  beforeAll(async () => {
    testContext = await setupClient(serverUrl)
    ledgerContext = await setupLedger(testContext)
  })
  afterAll(async () => {
    teardownClient(testContext)
    teardownLedger(ledgerContext)
  })

  it('nftoken mint - basic', async () => {
    const txBlob = await testTransaction(
      testContext,
      ledgerContext,
      'test/fixtures/19-nftoken-mint/01-basic.json'
    )
    const response = await testContext.client.submit(txBlob)
    expect(response.result.engine_result).toMatch('tesSUCCESS')
    await close(testContext.client)
  })
  it('uritoken mint - burnable', async () => {
    const txBlob = await testTransaction(
      testContext,
      ledgerContext,
      'test/fixtures/19-nftoken-mint/02-burnable.json'
    )
    const response = await testContext.client.submit(txBlob)
    expect(response.result.engine_result).toMatch('tesSUCCESS')
    await close(testContext.client)
  })
})
