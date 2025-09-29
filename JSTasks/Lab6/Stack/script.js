let stack = [];

    const inputField = document.getElementById('inputField');
    const addButton = document.getElementById('addButton');
    const removeButton = document.getElementById('removeButton');
    const stackList = document.getElementById('stackList');

    function updateStack() {
        stackList.innerHTML = '';
        for (let i = stack.length - 1; i >= 0; i--) {
            const li = document.createElement('li');
            li.textContent = stack[i];
            stackList.appendChild(li);
        }
    }

    addButton.addEventListener('click', () => {
        const value = inputField.value;
        if (value) {
            stack.push(value);
            inputField.value = '';
            updateStack();
        }
    });

    removeButton.addEventListener('click', () => {
        stack.pop();
        updateStack();
    });