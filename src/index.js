const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(fileName, fileContent)
    console.log("succesfully created")
}


const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const result =  await fs.readFile(fileName)
	console.log(result.toString());

}

const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await  fs.appendFile(fileName,fileContent)
	console.log("updated");
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(fileName)
	console.log("deleted")

}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }