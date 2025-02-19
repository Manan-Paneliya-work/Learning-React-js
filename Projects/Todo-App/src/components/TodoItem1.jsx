function TodoItem1() {

    let TodoName = "Buy Milk";
    let tododate = "4/10/2023";


    return <div class="container">
        <div class="row kg-row">
            <div class="col-5">
                {TodoName}
            </div>
            <div class="col-3">
                {tododate}
            </div>
            <div class="col-3">
                <button type="button" class="btn btn-danger">Delete</button>
            </div>
        </div>
 </div>
}
export default TodoItem1;