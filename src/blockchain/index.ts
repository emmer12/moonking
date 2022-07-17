import ethers, { providers} from "ethers"

export const getSigner = (provider:any, account:any) => {
  const _provider = (new providers.Web3Provider(provider))
  return _provider.getSigner()
}

export const claim = ()=>{

}