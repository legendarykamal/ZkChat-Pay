# ZK-Chat&Pay

![image](https://user-images.githubusercontent.com/95926324/232004303-2d900083-17c2-404f-af3c-fb81b9275374.png)

Decentralised ZK messaging with Defi Features X Fund the best Public Good Projects with Zk.

Project where the users would be easily able to chat with other users and send them money through zk .

Features:- 

Multi-Blockchain support: Adding support for multiple cryptocurrencies can make your platform more accessible to a wider range of users who may prefer to transact in different digital assets. 

Group chat functionality: Providing the ability for users to create and join group chats can enhance the social aspect of your platform and enable more efficient communication among groups of people. 

Public Goods Projects that need to be funded are listed on /fund pg. Users can fund the projects using crosschain tokens.

Chatting users can go to the /transfer/USER_EVMADDRESS page where user can send BOB directly to another users' zkAddress.
live video for introduction:

https://user-images.githubusercontent.com/97211928/232255956-e9c22992-53fd-4d7d-913e-568b1f5d83bc.mp4


## Bounties 

## Ethereum Foundation

Our Dapp is Powered by ZK and RLN for spam prevention , 
users are required to generate proofs each time they need to send the message. 

RLN helps to keep the conversations spam free and maintains a registery with proofs of the published msges.

https://github.com/xentoshi/ZkChat-Pay/blob/main/zk-chatpay/frontend/components/chatroom.tsx#L39

## QuickNode NFT-APi

Quicknode's NFT-api is used to get the NFT of the user which is utilised to give the avatar in the zk-chat.

https://github.com/xentoshi/ZkChat-Pay/blob/main/zk-chatpay/frontend/pages/api/nft.js

## Aave Grants DAO

GHO is a decentralized multi-collateral stablecoin that is fully backed, transparent and native to the Aave Protocol.

GHO tokens are used by the owner of proposals to buy the GHO stablecoin from the market and initiate their flow . Later they return and repay the GHO tokens.

https://github.com/xentoshi/ZkChat-Pay/blob/main/zk-chatpay/frontend/pages/borrow.tsx  , 
https://github.com/xentoshi/ZkChat-Pay/blob/main/zk-chatpay/frontend/pages/repay.tsx


## 1inch Swap 

For swapping of Different tokens inorder to fund the proposals in the best way for the supporters

## Sismo Integration

Sismo's on-chain Verification is used to autheticate the users and with the help of zkProof generated we verify if the user was an early supporter of the specific fund raiser campaign or not. 

If he/she was then they are given the ability to accept the zk-airdrops.

https://github.com/xentoshi/ZkChat-Pay/blob/main/zk-chatpay/frontend/pages/chat.tsx

Project where the users would be easily able to Fund the Public goods proposals while inquire about the project through zk chat & fund them money through zk .

https://github.com/xentoshi/ZkChat-Pay/commit/2977618360a33d938ee92a451ea8e2bd6a54a9f2

## ZkBob `directDeposit` is utilised for doing zkPayments

-> The project integrated the `directDeposit` operation in `/transfer` page, which allows users to send BOB directly to someone's zkAddress from our project.

-> Through `ZkBob` supporters can easily fund the proposals too.

https://github.com/xentoshi/ZkChat-Pay/blob/main/zk-chatpay/frontend/pages/transfer/%5Baddress%5D.tsx

## Push Protocol

-> Inorder to Notify the proposal Owner Whenever someone Funds their proposal. 


# Navigation to different pages

/ - landing pg

/chat - chat page

/transfer - zkbob integration

/fund - Projects listed who need funding with funding button

/fusion - to swap tokens

/borrow - to borrow for the project needs and later repay when support increases with time.

/repay - Repay the gho tokens.

