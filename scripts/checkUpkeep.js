const KeepersConsumer = artifacts.require("KeepersConsumer")

module.exports = async (callback) => {
    const keepersConsumer = await KeepersConsumer.deployed()
    const checkData = web3.utils.toHex("")
    const { upkeepNeeded } = await keepersConsumer.checkUpkeep(checkData)
    console.log(`Upkeep Needed: ${upkeepNeeded}`)
    callback()
}
