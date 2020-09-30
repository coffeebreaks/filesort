const fs = require("fs");

// C:/Users/Huawei/Desktop/

function start(){
fs.readdir("./tmp/", (err, files) => {
  handelFile(files)
});
}

function handelFile(files){
  files.map(file => getType(file))
}

function getType(file){
  
  let ext = file.split(".")

  // console.log(ext)
  selectOnlyLast(file, ext)
}

function selectOnlyLast(ogFile, extarr){
  
  lastExt = extarr.splice(extarr.length -1,extarr.length )
  
  console.log(lastExt)
  // moveFiles(ogFile)
  createFolder(ogFile, lastExt)
}

function createFolder(file, ext){
  var dir = `C:/Users/Huawei/Documents/Files/${ext}`;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

fileDuplicate(file,ext)
// moveFiles(file,ext)
}

function fileDuplicate(file,folder){
  fs.existsSync(`C:/Users/Huawei/Documents/Files/${folder}/${file}`) ? "" : moveFiles(file,folder)
  
  }



function moveFiles(file, folder) {
  
  fs.rename(`./tmp/${file}`, `C:/Users/Huawei/Documents/Files/${folder}/${file}`, function (err) {
    if (err) {
        if (err.code === 'EXDEV') {
            copy();
        } else {
            
        }
        return;
    }
    console.log("Gotta sweep sweep sweep")
});

}

start()



