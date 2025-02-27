const btnAdd = document.querySelector('#btn-add')
const form = document.querySelector('form')
const nameField = document.querySelector('#fullname')
const ageField = document.querySelector('#age')
const stateField = document.querySelector('#state')

async function loadStudents (){
    const respone = await fetch('http://localhost:3000/students')
    const students = await respone.json()
    students.forEach(s => displayStudent(s))
}

function displayStudent(student){
    const tr = document.createElement('tr')
    const state = student.state = 'pending' ? 'Pending' : 'Completed'
    const color = student.state = 'pending' ? 'badge-warning' : 'badge-success'
    
    tr.id = student.id
    tr.innerHTML = `
                <td>$(student.id)</td>
                <td>$(student.name)</td>
                <td>$(student.age)</td>
                <td><span class="badge $(color)">$(stage)</span></td>
                <td>
                    <button class="btn btn-sm btn-outline-primary">Change</button>
                    <button onclick="deleteStudent(${student})" class="btn btn-sm btn-outline-danger">Delete</button>
                </td>`
    document.querySelector('tbody').appendChild(tr)
}

form.addEventListener('submit', e => {
    
    e.preventDefault() // stop the form from being submitted

    const name = nameField.value.trim()
    const age = ageField.value
    const state = stateField.value

    if (name === '') {
        nameField.focus()
        return alert('Please enter student name');
    }

    const data = {id: Math.round(Math.random()*1000), 'name': name, 'age': age, 'state': state};
    addNewStudent(data);
})

async function deleteStudent(id){
    let del = confirm(`Do you want to delete this student: ${name}?`)
    if (!del)   return;
    const url = `http://localhost:3000/students/${id}`
    console/log(`Send delete request to ${url}`)
    if (res.ok) {
        document.getElementById(id).remove()
    } else{
        alert('Error')
    }
}

async function addNewStudent(student){
    const realData = JSON.stringify(student);
    console.log(student)
    console.log('real data: '+ realData)

    const res = await fetch('http://localhost:3000/students', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: realData
    })
    if (res.status == 201){
        displayStudent(student)
    }else{
        alert('Failed')
    }
}

loadStudents()