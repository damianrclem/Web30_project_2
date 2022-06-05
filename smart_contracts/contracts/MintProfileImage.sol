//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract ProfileImageNft is ERC771, Ownable {

  using Counters for Counters.Counter;
  using Strings for uint256;

  Counters.Counter _tokenId;

  mapping(unit256 => string) _tokenURIs;

  struct RenderToken {
    unit256 id;
    string uri;
    string space;
  }  

  constructor() ERC721("ProfileImageNFTs", "PIN") {}

  function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal {
    _tokenURIs[tokenId] = _tokenURI;
  }

  function tokenURI(uint256 tokenId) public view virtual override returns(string memory) {
    require(_exists(tokenId), "URI does not exist for that token ID");
    string memory RUri = _tokenURIs[tokenId];
    return RUri;
  }

  

}
