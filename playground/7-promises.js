// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Error! something went wrong')
//         resolve([1, 2, 5])
//     }, 2000)
// })

// doWorkPromise.then((result) => {
//     console.log('Success!', result)
// }).catch((error) => {
//     console.log(error)
// })

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// Bad practice
add(2, 4).then((sum) => {
    console.log(sum)
    add(sum, 5).then((sum2) => {
        console.log(sum2)
    }).catch((error) => {
        console.log(error)
    })
}).catch((error) =>{
    console.log(error)
})

//Good practice
add(1, 1).then((sum) => {
    console.log(sum)
    return add(sum, 2)
}).then((sum2) => {
    console.log(sum2)
}).catch((error) => {
    console.log(error)
})
