import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(updatedCoffee)

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })
    }


    return (
        <div className="bg-[#F4F3F0] p-24 mx-auto">
            <h2 className="text-3xl font-extrabold mb-12 text-center">Update Coffee: {name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8 gap-20">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity"  defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier and taste row */}
                <div className="md:flex mb-8 gap-20">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier"  defaultValue={supplier} placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text"  defaultValue={taste} name="taste" placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8 gap-20">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category"  defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text"  defaultValue={details} name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form photo row */}
                <div className="">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-black">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo"  defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input className="btn btn-block mt-12 bg-[#D2B48C] text-[#331A15]" type="submit" value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;