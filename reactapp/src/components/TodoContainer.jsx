function TodoContainer(){
    return <div className="card p-3">
        <h1 className="text-center">Todo List</h1>
        <div className="card-body">
        <div className="mb-3">
            <h>Add TODO</h>
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
                </input>
            
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>
            
        </div>
    
            
        </div>
    </div>
}

export default TodoContainer;