export default function FormBase({disabled, onSearch, children}) {

    const style = {
        display:'flex',
        margin:'50px',
        justifyContent:'space-around',
        width:'50%',
        marginLeft:'auto',
        marginRight:'auto'
    };

    return (<form data-testid="id-test-form" style={style} onSubmit={ev=>{ev.preventDefault();onSearch(ev);}}>
        {children}
        <button type="button" onClick={onSearch} disabled={disabled}>Search</button>
    </form>)


}