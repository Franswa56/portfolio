import SignForm from "../../components/SignForm/SignForm"
import './_Admin.scss'

function Admin() {
    return(
        <div className="admin">
            <div className="admin__container">
            <SignForm/>
            </div>
        </div>
    )
}

export default Admin