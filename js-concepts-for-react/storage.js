localStorage.setItem('id', 100);

const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const valueInput = document.getElementById('storage-value');

    if (idInput.value && valueInput.value) {
        localStorage.setItem(idInput.value, valueInput.value);
    }
    idInput.value = '';
    valueInput.value = '';
}

// value set by array or object: use JSON.stringify
localStorage.setItem('pen', [1, 2, 4]);
localStorage.setItem('pen2', JSON.stringify([1, 2, 4]));
localStorage.setItem('pen3', { name: 'mahfuz' });
localStorage.setItem('pen4', JSON.stringify({ name: 'mahfuz' }));

const pen4 = localStorage.getItem('pen4');
console.log(pen4);
console.log(JSON.parse(pen4));