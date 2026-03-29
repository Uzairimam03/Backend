// File handling 
// {read, write, append, unlink=delete, mkdir, stat}

const fs = require ("fs")

// fs.writeFileSync("./test.txt", "Hey there is a test")

//  fs.appendFileSync("./test.txt", `${new Date().toLocaleString()}, Hey There\n` )

// fs.cpSync("./test.txt", "newtest.txt")

fs.unlinkSync("./newtest.txt")


