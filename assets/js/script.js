
const reqURL = "https://5f44f2df3fb92f0016754178.mockapi.io/user";

function loadUserList() {
    let content = "";
    fetch(reqURL, { method: "get" })
        .then(resp => resp.json())
        .then(data => {
            data.forEach(item => {
                content += `<li id = rowID-${item.id} class="m1"> ${item.id} - ${item.name} - ${item.email}
                <a href="#" onclick = "removeData(${item.id})" class="btn btn-ms btn-success float-right ml1">delete</a>
                <a href= "edit.html?id=${item.id}" onclick = "getUser(${item.id})" class="btn btn-ms btn-danger ml1 float-right">edit</a>
                </li>`
            });
            document.getElementById("target").innerHTML = content;
        }).catch(errors => {
            console.log(errors.getMessage());
        })
}

// DELETE  
function removeData(id) {
    var removeNode = document.getElementById(`rowID-${id}`);
    removeNode.remove();

    var removeURL = `${reqURL}/${id}`;

    fetch(removeURL, {
        method: "DELETE",
    }).then(resp => resp.json())
        .then(data => {
            console.log("ok");
        })
        .catch(errors => {
            console.log(errors.getMessage());
        })
}

// INSERT  
function addData(user) {
    fetch(reqURL, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)

    }).then(data => {
        window.location = "index.html"
    }).catch(errors => {
            console.log(errors);
        })
}

// UPDATE 
function updateData(user) {
    fetch(reqURL + "/" + user.id, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(data => {
        // alert('updated successfully')
        window.location = "index.html"
    }).catch(errors => {
        console.log(errors);
    })
}