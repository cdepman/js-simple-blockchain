const sha256 = require('sha256');
  
class Block {
  constructor(index, timestamp, data, prevHash){
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;
    this.hash = sha256(this.index + this.timestamp + this.data + this.prevHash);
  }
}

class Blockchain {
  constructor(name = 'Blockchain'){
    this.name = name;
    this.chain = [this.createGenesisBlock()];
  }
  addBlock(data){
    const prevBlock = this.headOfChain();
    const nextBlockIndex = prevBlock.index + 1;
    const nextBlock = new Block(nextBlockIndex, Date.now(), data, prevBlock.hash);
    this.chain.push(nextBlock)
  }
  headOfChain(){
    return this.chain[this.headIndex()];
  }
  chainLength(){
    return this.chain.length;
  }
  headIndex(){
    return this.chainLength() - 1;
  }
  createGenesisBlock(){
    return new Block(0, Date.now(), 'Genesis Block', '0');
  }
}
