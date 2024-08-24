import style from "./Button.module.css"

function Button(){
    const styles = {
        width: '100px',
        height: 'auto',
        backgroundColor: 'red',
        color: 'rgb(47, 70, 74)',
        border: 'none',
        borderRadius: '10px',
        padding: '10px',
        cursor: 'pointer',

    }
    return(
        <>
            <button className={style.button}>click me</button>
            <button style={styles}>click me</button>
        </>
    );
}


export default Button