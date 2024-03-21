import AdminNav from "./AdminNav"

export default function Dashboard(){
    return(
        <>
            <div className="fixed top-0 left-0">
                <AdminNav/>
            </div>
            <h1>Admin Dashboard</h1>
        </>
    )
}