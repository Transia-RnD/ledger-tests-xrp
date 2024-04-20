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

describe('AMMCreate', () => {
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

  it('amm create - basic', async () => {
    const txBlob = await testTransaction(
      testContext,
      ledgerContext,
      'test/fixtures/XX-amm-create/01-basic.json'
    )
    const response = await testContext.client.submit(txBlob)
    expect(response.result.engine_result).toMatch('tesSUCCESS')
    await close(testContext.client)
  })
})

describe('AMMDeposit', () => {
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

  it('amm deposit - one-sided', async () => {
    const txBlob = await testTransaction(
      testContext,
      ledgerContext,
      'test/fixtures/XX-amm-deposit/01-one-sided.json'
    )
    const response = await testContext.client.submit(txBlob)
    expect(response.result.engine_result).toMatch('tesSUCCESS')
    await close(testContext.client)
  })
  it('amm deposit - two-sided', async () => {
    const txBlob = await testTransaction(
      testContext,
      ledgerContext,
      'test/fixtures/XX-amm-deposit/02-two-sided.json'
    )
    const response = await testContext.client.submit(txBlob)
    expect(response.result.engine_result).toMatch('tesSUCCESS')
    await close(testContext.client)
  })
  it('amm deposit - amount-lp-out', async () => {
    const txBlob = await testTransaction(
      testContext,
      ledgerContext,
      'test/fixtures/XX-amm-deposit/03-amount-lp-out.json'
    )
    const response = await testContext.client.submit(txBlob)
    expect(response.result.engine_result).toMatch('tesSUCCESS')
    await close(testContext.client)
  })
  it('amm deposit - lp-out', async () => {
    const txBlob = await testTransaction(
      testContext,
      ledgerContext,
      'test/fixtures/XX-amm-deposit/04-lp-out.json'
    )
    const response = await testContext.client.submit(txBlob)
    expect(response.result.engine_result).toMatch('tesSUCCESS')
    await close(testContext.client)
  })
})

describe('AMMWithdraw', () => {
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

  it('amm withdraw - one-sided', async () => {
    const txBlob = await testTransaction(
      testContext,
      ledgerContext,
      'test/fixtures/XX-amm-withdraw/01-one-sided.json'
    )
    const response = await testContext.client.submit(txBlob)
    expect(response.result.engine_result).toMatch('tesSUCCESS')
    await close(testContext.client)
  })
  it('amm withdraw - two-sided', async () => {
    const txBlob = await testTransaction(
      testContext,
      ledgerContext,
      'test/fixtures/XX-amm-withdraw/02-two-sided.json'
    )
    const response = await testContext.client.submit(txBlob)
    expect(response.result.engine_result).toMatch('tesSUCCESS')
    await close(testContext.client)
  })
  it('amm withdraw - amount-lp-out', async () => {
    const txBlob = await testTransaction(
      testContext,
      ledgerContext,
      'test/fixtures/XX-amm-withdraw/03-amount-lp-out.json'
    )
    const response = await testContext.client.submit(txBlob)
    expect(response.result.engine_result).toMatch('tesSUCCESS')
    await close(testContext.client)
  })
  it('amm withdraw - lp-out', async () => {
    const txBlob = await testTransaction(
      testContext,
      ledgerContext,
      'test/fixtures/XX-amm-withdraw/04-lp-out.json'
    )
    const response = await testContext.client.submit(txBlob)
    expect(response.result.engine_result).toMatch('tesSUCCESS')
    await close(testContext.client)
  })
})

describe('AMMVote', () => {
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

  it('amm vote - basic', async () => {
    const txBlob = await testTransaction(
      testContext,
      ledgerContext,
      'test/fixtures/XX-amm-vote/01-basic.json'
    )
    const response = await testContext.client.submit(txBlob)
    expect(response.result.engine_result).toMatch('tesSUCCESS')
    await close(testContext.client)
  })
})

describe('AMMBid', () => {
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

  it('amm bid - basic', async () => {
    const txBlob = await testTransaction(
      testContext,
      ledgerContext,
      'test/fixtures/XX-amm-bid/01-basic.json'
    )
    const response = await testContext.client.submit(txBlob)
    expect(response.result.engine_result).toMatch('tesSUCCESS')
    await close(testContext.client)
  })
  it('amm bid - min max', async () => {
    const txBlob = await testTransaction(
      testContext,
      ledgerContext,
      'test/fixtures/XX-amm-bid/02-min-max.json'
    )
    const response = await testContext.client.submit(txBlob)
    expect(response.result.engine_result).toMatch('tesSUCCESS')
    await close(testContext.client)
  })
})
