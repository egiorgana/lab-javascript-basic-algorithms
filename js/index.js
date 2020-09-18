// Iteration 1: Names and Input
const hacker1 = 'Eliher'
console.log(`The driver's name is ${hacker1}`)

const hacker2 = 'Alejandro'
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  }else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
console.log(hacker1.split('').join(' ').toUpperCase())
console.log(hacker2.split('').reverse().join(''))

if(hacker1.localeCompare(hacker2) === 1){
    console.log(`Yo, the navigator goes first definitely.`)
  }else if(hacker2.localeCompare(hacker1) === -1){
    console.log(`The driver's name goes first.`)
  }else{
    console.log(`What?! You both have the same name?`)
}

// Bonus 1:
let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor consectetur ante, id commodo ipsum cursus non. Aliquam in est nibh. Nunc quis iaculis enim. Curabitur pharetra mauris vel lacus tristique egestas vitae vel urna. Phasellus commodo vel massa non mattis. Nunc semper convallis quam, ut tincidunt elit varius laoreet. In hac habitasse platea dictumst. In ut nisl turpis. Aenean gravida tellus finibus turpis rutrum, bibendum semper lorem faucibus. Nam at euismod urna.
Donec lacinia tempus dui quis luctus. Pellentesque luctus odio id enim scelerisque tristique ut quis erat. Integer scelerisque vehicula ante, non ultrices justo placerat non. Nam purus velit, pulvinar vitae felis in, porta egestas risus. Morbi id mattis dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque faucibus eu ipsum vitae dictum. Nunc est ligula, varius sagittis eros vel, egestas faucibus lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vitae sagittis nibh. Nam vel sollicitudin lacus. Ut at urna pellentesque, tincidunt eros eu, ultrices purus. Nulla ut justo nec mi scelerisque laoreet.
Aliquam pulvinar mauris nunc, sit amet vehicula metus hendrerit vel. Suspendisse luctus nulla ex, ut fringilla odio accumsan a. Duis est nibh, ultricies eu ipsum accumsan, auctor maximus enim. Integer ac erat placerat, sagittis nibh nec, tempus mauris. Nam ut erat sagittis, lacinia purus eu, pharetra purus. Donec eget faucibus elit. Praesent gravida aliquam sapien, a eleifend leo convallis ultrices. Ut neque leo, tristique quis elit vel, eleifend laoreet urna. Sed felis nunc, semper vel tortor vitae, cursus vulputate lectus. Aenean at lectus elementum, interdum lectus nec, tempus nisi. Aenean quis dui arcu. Morbi quis velit volutpat, eleifend justo id, pulvinar leo. Aliquam at diam nunc.`

console.log(`The number of words is ${text.split(' ').length}`)

const count = (text.match(/et/g)).length
console.log(count)