/*let demoJson = {
    "name": "Student",
    "age": 25,
    "school": "LUT",
    "courses": [
        "Introduction to Web programming",
        "Object-oriented programming",
        "User Interfaces and Usability"
    ]   
}

console.log(demoJson)
let stringJson = JSON.stringify(demoJson)
console.log(stringJson)
let JSobject = JSON.parse(stringJson)
console.log(JSobject)*/

const usersTable = document.getElementById("users")
const postsTable = document.getElementById("posts")
const getUsersButton = document.getElementById("getUsers")

getUsersButton.addEventListener("click", getUsers)

async function getUsers() {
    const url = "https://jsonplaceholder.typicode.com/users"
    const usersPromise = await fetch(url)
    const userJSON = await usersPromise.json()
    console.log(userJSON)

    userJSON.forEach((user) => {
        //console.log(user)
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")

        td1.innerText = user.name
        td1.addEventListener("click", () => {getPosts(user.id)})
        td2.innerText = user.email
        tr.appendChild(td1)
        tr.appendChild(td2)

        usersTable.appendChild(tr)
    })
}

async function getPosts(userId) {
    const url = "https://jsonplaceholder.typicode.com/users/" + userId + "/posts"
    const postsPromise = await fetch(url)
    const postsJSON = await postsPromise.json()

    postsJSON.forEach((post) => {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")

        td1.innerText = post.title
        td2.innerText = post.body
        tr.appendChild(td1)
        tr.appendChild(td2)

        postsTable.appendChild(tr)
    })
}