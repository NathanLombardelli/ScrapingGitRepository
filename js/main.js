document.getElementById('submitButton').addEventListener('click',async () => {
    let username = document.getElementById('username').value;
    const response = await fetch('https://github.com/' + username + '?tab=repositories',{
        mode: 'cors',
        credentials: 'include',
        method: 'POST',
    });
    // Convert the response into text
    document.getElementById('result').innerText = await response.text();
});