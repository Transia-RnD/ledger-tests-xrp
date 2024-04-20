import { Client, Wallet } from 'xrpl'

import serverUrl from './serverUrl'
import {
  NOT_ACTIVE_WALLET,
  MASTER_WALLET,
  GW_WALLET,
  ALICE_WALLET,
  BOB_WALLET,
  CAROL_WALLET,
  DAVE_WALLET,
  ELSA_WALLET,
  FRANK_WALLET,
  GRACE_WALLET,
  HEIDI_WALLET,
  IVAN_WALLET,
  JUDY_WALLET,
  HOOK1_WALLET,
  HOOK2_WALLET,
  HOOK3_WALLET,
  HOOK4_WALLET,
  HOOK5_WALLET,
} from './constants'
import { fundSystem } from './fundSystem'
import { IC } from './tools'

export interface XrplIntegrationTestContext {
  client: Client
  notactive: Wallet
  master: Wallet
  gw: Wallet
  ic: IC
  alice: Wallet
  bob: Wallet
  carol: Wallet
  dave: Wallet
  elsa: Wallet
  frank: Wallet
  grace: Wallet
  heidi: Wallet
  ivan: Wallet
  judy: Wallet
  hook1: Wallet
  hook2: Wallet
  hook3: Wallet
  hook4: Wallet
  hook5: Wallet
}

export async function teardownClient(
  context: XrplIntegrationTestContext
): Promise<void> {
  if (!context || !context.client) {
    return
  }
  context.client.removeAllListeners()
  return context.client.disconnect()
}

async function connectWithRetry(client: Client, tries = 0): Promise<void> {
  return client.connect().catch(async (error) => {
    if (tries < 10) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(connectWithRetry(client, tries + 1))
        }, 1000)
      })
    }

    throw error
  })
}

export async function setupClient(
  server = serverUrl
): Promise<XrplIntegrationTestContext> {
  const currency = 'USD'
  const context: XrplIntegrationTestContext = {
    client: new Client(server, { timeout: 200000 }),
    notactive: NOT_ACTIVE_WALLET,
    master: MASTER_WALLET,
    gw: GW_WALLET,
    ic: IC.gw(currency, GW_WALLET.classicAddress),
    alice: ALICE_WALLET,
    bob: BOB_WALLET,
    carol: CAROL_WALLET,
    dave: DAVE_WALLET,
    elsa: ELSA_WALLET,
    frank: FRANK_WALLET,
    grace: GRACE_WALLET,
    heidi: HEIDI_WALLET,
    ivan: IVAN_WALLET,
    judy: JUDY_WALLET,
    hook1: HOOK1_WALLET,
    hook2: HOOK2_WALLET,
    hook3: HOOK3_WALLET,
    hook4: HOOK4_WALLET,
    hook5: HOOK5_WALLET,
  }
  return connectWithRetry(context.client)
    .then(async () => {
      await fundSystem(context.client, context.master, context.ic)
      return context
    })
    .catch(async (error: unknown) => {
      console.log(error)
      await teardownClient(context)
      throw error
    })
}
