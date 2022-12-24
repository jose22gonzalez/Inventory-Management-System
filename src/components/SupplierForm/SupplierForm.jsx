import React from "react";

const SupplierForm = () =>{

    return(
        <div className="Supplier-box">
            <h2>Supplier Form</h2>
            <form>
                <div className="user-box">
                    <input type="text" />
                    <label htmlFor="">Supplier Name</label>
                </div>

                <div className="user-box">
                    <input type="text" />
                    <label htmlFor="">Supplier Phone Number</label>
                </div>
                
                <div className="user-box">
                    <input type="text" />
                    <label htmlFor="">Supplier Email</label>
                </div>
                
                <div className="user-box">
                    <input type="text" />
                    <label htmlFor="">Supplier Adress</label>
                </div>

                <div className="button-form">
                    <a id="save" href="#">Save</a>
                    <a id="update" href="#">Update</a>
                    <a id="delete" href="#">Delete</a>
                </div>
            </form>
        </div>
    );

}

export default SupplierForm;