// function updateDateTime() {
//   const now = new Date();
//   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//   const date = now.toLocaleDateString('ar-EG', options);
//   const time = now.toLocaleTimeString('ar-EG');
//   document.getElementById('datetime').textContent = `${date} - ${time}`;
// }

// setInterval(updateDateTime, 1000);
// updateDateTime();
function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const time = now.toLocaleTimeString('ar-EG');
    const date = now.toLocaleDateString('ar-EG', options);

    document.getElementById('datetime').innerHTML = `${date} | ${time}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();
