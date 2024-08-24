import PropTyps from "prop-types"

function Student(props){
    return(
        <div className="student">
            <p>name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>student: {props.isStudent ? "Yes":"No" }</p>
        </div>
    );
}
Student.prototype = {
    name : PropTyps.string,
    age : PropTyps.number,
    isStudent :PropTyps.bool

}
Student.defaultProps = {
    name : "Guest",
    age : 0,
    isStudent : false
}


export default Student