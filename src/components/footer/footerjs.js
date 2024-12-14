// demo =function(){
//     alert("u clicked here")
// }
const linurl = 'https://www.linkedin.com/in/sharad-naik-b3238b239/'
const mailurl = 'https://mail.google.com/mail/u/0/#inbox?compose=new'
const leetcodeurl = 'https://leetcode.com/sharadnaik001/'
const demo =() =>{
// alert( " you clicked github");
window.open('https://github.com/shardsnaik', '_blank')
}
const lindemo =() =>{
window.open(linurl, '_blank')
}
const leetdemo =() =>{
window.open(leetcodeurl, '_blank')
}
const maildemo =() =>{
window.open(mailurl, '_blank')
}
const demo2 =() =>{
window.location.href='https://www.instagram.com/sharadsnaik/'
}
// export default {demo, demo2};
export {demo, demo2, leetdemo, lindemo,maildemo};