import {
  AccountSetAsfFlags,
  AccountSetTfFlags,
  OfferCreateFlags,
  PaymentChannelClaimFlags,
  PaymentFlags,
  PaymentFlagsInterface,
  TrustSetFlags,
} from 'xrpl'

export enum AccountAsfStringFlags {
  asfPasswordSpent = 'Password Spent',
  asfRequireDest = 'Require Dest',
  asfRequireAuth = 'Require Auth',
  asfDisallowXRP = 'Disallow XAH',
  asfDisableMaster = 'Disable Master',
  asfNoFreeze = 'No Freeze',
  asfGlobalFreeze = 'Global Freeze',
  asfDefaultRipple = 'Default Ripple',
  asfDepositAuth = 'Deposit Auth',
  asfDisallowIncomingNFTokenOffer = 'Disallow NFT Offers',
  asfDisallowIncomingCheck = 'Disallow Checks',
  asfDisallowIncomingPayChan = 'Disallow Pay. Channels',
  asfDisallowIncomingTrustline = 'Disallow Trustlines',
  asfAuthorizedNFTokenMinter = 'Authorized NFToken Minter',
  asfURITokenIssuer = 'URI Token Issuer',
  asfDisallowIncomingRemit = 'Disallow Remits',
  asfTshCollect = 'TSH Collect',
  asfAccountTxnID = 'Track Txn ID',
}

export enum AccountSetStringFlags {
  tfRequireDestTag = 'Require Dest Tag',
  tfOptionalDestTag = 'Optional Dest Tag',
  tfRequireAuth = 'Require Auth',
  tfOptionalAuth = 'Optional Auth',
  tfDisallowXRP = 'Disallow XAH',
  tfAllowXRP = 'Allow XAH',
}

export enum PaymentStringFlags {
  tfNoDirectRipple = 'No Direct Ripple',
  tfPartialPayment = 'Partial Payment',
  tfLimitQuality = 'Limit Quality',
}

export enum OfferCreateStringFlags {
  tfPassive = 'Passive',
  tfImmediateOrCancel = 'Immediate or Cancel',
  tfFillOrKill = 'Fill or Kill',
  tfSell = 'Sell',
}

export enum PaymentChannelClaimStringFlags {
  tfRenew = 'Renew',
  tfClose = 'Close',
}

export enum TrustSetStringFlags {
  tfSetfAuth = 'Set Auth',
  tfSetNoRipple = 'Set No Ripple',
  tfClearNoRipple = 'Clear No Ripple',
  tfSetFreeze = 'Set Freeze',
  tfClearFreeze = 'Clear Freeze',
}

function isFlagEnabled(Flags: number, checkFlag: number): boolean {
  // eslint-disable-next-line no-bitwise -- flags needs bitwise
  return (checkFlag & Flags) === checkFlag
}

export function parsePaymentFlags(flags: number): PaymentFlagsInterface {
  const flagsInterface: PaymentFlagsInterface = {}
  // If we use keys all will be strings and enums are reversed during transpilation
  Object.keys(PaymentFlags).forEach((flag: string) => {
    if (
      typeof flag === 'string' &&
      isFlagEnabled(flags, PaymentFlags[flag as keyof typeof PaymentFlags])
    ) {
      flagsInterface[flag as keyof typeof PaymentFlags] = true
    }
  })

  return flagsInterface
}

export function paymentFlagsToString(flags: number): string {
  let flagsString = ''
  let count = 0
  Object.keys(PaymentFlags).forEach((flag: string) => {
    if (
      typeof flag === 'string' &&
      isFlagEnabled(flags, PaymentFlags[flag as keyof typeof PaymentFlags])
    ) {
      if (count > 0) {
        flagsString +=
          ', ' + PaymentStringFlags[flag as keyof typeof PaymentFlags]
      } else {
        flagsString += PaymentStringFlags[flag as keyof typeof PaymentFlags]
      }
      count += 1
    }
  })

  return flagsString
}

export function accountRootFlagsToString(flags: number): string {
  let flagsString = ''
  let count = 0
  Object.keys(AccountSetTfFlags).forEach((flag: string) => {
    if (
      typeof flag === 'string' &&
      isFlagEnabled(
        flags,
        AccountSetTfFlags[flag as keyof typeof AccountSetTfFlags]
      )
    ) {
      if (count > 0) {
        flagsString +=
          ', ' + AccountSetStringFlags[flag as keyof typeof AccountSetTfFlags]
      } else {
        flagsString +=
          AccountSetStringFlags[flag as keyof typeof AccountSetTfFlags]
      }
      count += 1
    }
  })

  return flagsString
}

export function accountSetFlagsToString(flags: number): string {
  const flag = AccountSetAsfFlags[flags]
  return AccountAsfStringFlags[flag as keyof typeof AccountSetAsfFlags]
}

export function offerCreateFlagsToString(flags: number): string {
  let flagsString = ''
  let count = 0
  Object.keys(OfferCreateFlags).forEach((flag: string) => {
    if (
      typeof flag === 'string' &&
      isFlagEnabled(
        flags,
        OfferCreateFlags[flag as keyof typeof OfferCreateFlags]
      )
    ) {
      if (count > 0) {
        flagsString +=
          ', ' + OfferCreateStringFlags[flag as keyof typeof OfferCreateFlags]
      } else {
        flagsString +=
          OfferCreateStringFlags[flag as keyof typeof OfferCreateFlags]
      }
      count += 1
    }
  })

  return flagsString
}

export function paymentChannelClaimFlagsToString(flags: number): string {
  let flagsString = ''
  let count = 0
  Object.keys(PaymentChannelClaimFlags).forEach((flag: string) => {
    if (
      typeof flag === 'string' &&
      isFlagEnabled(
        flags,
        PaymentChannelClaimFlags[flag as keyof typeof PaymentChannelClaimFlags]
      )
    ) {
      if (count > 0) {
        flagsString +=
          ', ' +
          PaymentChannelClaimStringFlags[
            flag as keyof typeof PaymentChannelClaimFlags
          ]
      } else {
        flagsString +=
          PaymentChannelClaimStringFlags[
            flag as keyof typeof PaymentChannelClaimFlags
          ]
      }
      count += 1
    }
  })

  return flagsString
}

export function trustSetFlagsToString(flags: number): string {
  let flagsString = ''
  let count = 0
  Object.keys(TrustSetFlags).forEach((flag: string) => {
    if (
      typeof flag === 'string' &&
      isFlagEnabled(flags, TrustSetFlags[flag as keyof typeof TrustSetFlags])
    ) {
      if (count > 0) {
        flagsString +=
          ', ' + TrustSetStringFlags[flag as keyof typeof TrustSetFlags]
      } else {
        flagsString += TrustSetStringFlags[flag as keyof typeof TrustSetFlags]
      }
      count += 1
    }
  })

  return flagsString
}
