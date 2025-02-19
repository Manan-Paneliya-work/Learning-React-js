function TodoItem({todoitems}) {


    return <div className="container">
        <div className="row kg-row">
            {
                todoitems.map((todo) => (
                    <>  
                        < div className="col-5" >
                            {todo.name}
                        </div>
                        <div className="col-3">
                            {todo.date}
                        </div>
                        <div className="col-3">
                            <button type="button" className="btn btn-danger">Delete</button>
                        </div>
                    </>
                ))
            }

        </div>
    </div >
}
export default TodoItem;