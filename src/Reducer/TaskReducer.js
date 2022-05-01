const taskReducer = (state, action) => {

    let array;
    switch (action.type) {
        case 'ADD':
            array = [...state];
            array.push(action.payload);
            return array;
    }
}

export default taskReducer;