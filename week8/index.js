fetch('https://api.github.com/users/michaeljbey')
.then((data) =>data.json())
.then(dataJson =>console.log(dataJson))



//async programming
//aka asynchronos
//non-blocking programming