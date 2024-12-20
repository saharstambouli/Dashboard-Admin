import axios from 'axios';

export async function updateProduct  (productId, updatedFields) {
    try {
        const response = await axios.patch(`http://localhost:5000/dashboard/updateproduct`, {
            id: productId,
            ...updatedFields,
        }, {
            headers: {
                'Content-Type': 'application/json',
                // Add your authorization token if needed
                // 'Authorization': 'Bearer yourTokenHere',
            }
        });

        console.log('Product updated successfully', response.data);
    } catch (error) {
        console.error('Error updating product', error.response ? error.response.data : error.message);
    }
};


export async function deleteProduct (productId) {
    try {
        const response = await axios.delete(`http://localhost:5000/dashboard/deleteproduct`, {
            headers: {
                'Content-Type': 'application/json',
                // Add your authorization token if needed
                // 'Authorization': 'Bearer yourTokenHere',
            },
            data: { id: productId }, // Send product id in the body
        });

        console.log('Product deleted successfully', response.data);
    } catch (error) {
        console.error('Error deleting product', error.response ? error.response.data : error.message);
    }
};






export async function getProducts()
{   
    try {
        const response=await axios.get(`http://localhost:5000/product/getproducts`);
       console.log('response',response)
       
        if (response.status==200)
            return response.data
    } catch (error) {
        console.log(error)
        return false;
        
    }
}

export async function getProductBycategory(category)
{   
    try {
        const response=await axios.get(`http://localhost:5000/product/getproducts/${category}`);
        if (response.status==200)
            return response.data
    } catch (error) {
        console.log(error)
        return false;
        
    }
}

export async function getProductByID(id) {

    try {
        const response = await axios.get(`http://localhost:5000/product/getproduct/${id}`);
        if (response.status == 200)
            return response.data
    } catch (error) {
        console.log(error)
        return false;

    }
}