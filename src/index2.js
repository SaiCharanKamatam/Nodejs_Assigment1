const methods = require("./index")

methods.myFileWriter("demo.text","hello")
methods.myFileReader("demo.text")
methods.myFileUpdater("demo.text"," world")
methods.myFileDeleter("demo.text")