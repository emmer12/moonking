import { providers, Contract } from "ethers"
import Airdrop from "./Airdrop.json"
import { User } from "../generated/graphql-frontend"
export const getSigner = (provider: any, account: any) => {
  const _provider = (new providers.Web3Provider(provider))
  return _provider.getSigner()
}
const airdrop_factory = "0x0158e262F936eD52F0C06ed70765581977478F0c".toLowerCase()
export const claim_contract = async (provider: any, user: User) => {
  const { account, amount, nonce, claim_signature, eligible, claimed } = user
  const signer = getSigner(provider, account)
  const airdropContract = new Contract(airdrop_factory, Airdrop, signer)
  if (claimed || !eligible) return
  /* address account, uint256 amount,
  address token,uint256 nonce,bytes calldata signature */
  const token = "0xbd2b05c4a3fefd45277edc6fc11f1d7acd933f97"
    const txn = await airdropContract.claimAirdrop(
      account, amount, token, nonce, claim_signature
    )
    const receipt = await txn.wait()

    console.log({ receipt })
    return receipt.transactionHash

  
}