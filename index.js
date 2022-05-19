const { makeIxx } = require('ixixx')

;(async () => {
  console.log('indexing',process.argv[2])
  await makeIxx(
    process.argv[2] || 'infile.ix',
    process.argv[3] || 'outfile.ixx',
  )
  console.log('done')
})()
