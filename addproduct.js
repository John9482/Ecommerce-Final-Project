document.addEventListener('DOMContentLoaded', function() {
    const productForm = document.getElementById('productForm');
    const productNameInput = document.getElementById('productName');
    const productBrandInput = document.getElementById('productBrand');
    const productImageInput = document.getElementById('productImage');
    const productList = document.getElementById('productItems');
    const addProductButton = document.getElementById('addProduct');

    addProductButton.addEventListener('click', function() {
        const productName = productNameInput.value;
        const productBrand = productBrandInput.value;
        const productImage = productImageInput.files[0];

        if (productName && productBrand && productImage) {
            const listItem = document.createElement('li');
            const productInfo = document.createTextNode(`Name: ${productName}, Brand: ${productBrand}`);
            listItem.appendChild(productInfo);
            productList.appendChild(listItem);

            const image = document.createElement('img');
            image.src = URL.createObjectURL(productImage);
            image.width = 100;
            listItem.appendChild(image);

            productNameInput.value = '';
            productBrandInput.value = '';
            productImageInput.value = '';
        }
    });
});
