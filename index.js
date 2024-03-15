let tbody = document.querySelector("tbody")

const todos = async() => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    let data = await res.json()

    displayData(data)

}

const displayData = (data) => {
    
    data.forEach((ele) =>{
        let tr = document.createElement("tr")
        
        let id = document.createElement("td")
        id.innerHTML = ele.id
        
        let title = document.createElement("td")
        title.innerHTML = ele.title
        
        let status = document.createElement("td")
        status.innerHTML = ele.completed

        tr.append(id , title , status)
        
        tbody.append(tr)
    })
}

todos()


