const data = {name: 'Steve', email: 'steve@steve.com'};

function submitData(){
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(data)
    })
   .then(response => response.json())
   .then(data => {
    console.log('Success:', data);
   })
   .catch(error => {
    console.error('Error:', error)
   })
}

