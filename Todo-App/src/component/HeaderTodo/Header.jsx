const Header=()=>{
    const header=
        {
        color:'black',
            textAlign:'center'
        }

    return(
        <header style={header}>
            <h1>
                My todolist :)
            </h1>
            <p>Items werden in localStorage gespeichert</p>
        </header>
    )
}
export default Header