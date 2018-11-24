const Block = require('./block');
const ArrayUtils = require('./util/arrayUtils')

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
  isChainValid(){
    return this.chain.every(block => block.isValid())
  }
}

module.exports = Blockchain;
