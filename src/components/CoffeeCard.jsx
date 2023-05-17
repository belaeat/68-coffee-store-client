import { FaEye, FaPen, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    // delete operation
    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remaining);
                        }
                    })
            }
        })
    }


    return (
        <div className="card card-side bg-base-100 shadow-xl p-8">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex gap-4 justify-between w-full pr-4">
                <div>
                    <h2 className="card-title mb-4">{name}</h2>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Taste: {taste}</p>
                    <p>Details: {details}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn rounded-lg bg-[#D2B48C]"><FaEye /></button>
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn rounded-lg bg-[#3C393B]"><FaPen /></button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn rounded-lg bg-[#EA4744]"><FaTrash /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;