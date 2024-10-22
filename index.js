const fs = require('fs')
const path = require('path')

const iconList = fs.readdirSync(path.join(__dirname, '/icons'))
const frameList = fs.readdirSync(path.join(__dirname, '/frames'))

const assetData = {icons: iconList, frames: frameList}

fs.writeFileSync(path.join(__dirname, 'assets.json'), JSON.stringify(assetData))