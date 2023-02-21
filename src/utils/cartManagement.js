export const addToCart = (product, cart) => {
    const price = product.sale_price ? product.sale_price : product.price;
    if (cart.items.length) {
        cart.totalQty += 1;
        cart.totalPrice += price;
        const tempProd = cart.items.filter(e => e.id === product.id);
        if (tempProd.length) {
            cart.items = cart.items.map(e => {
                if (e.id === product.id) {
                    e.cartQty += 1;
                }
                return e;
            })
        } else {
            cart.items.push({
                ...product,
                cartQty: 1
            });
        }
    } else {
        cart.items.push({
            ...product,
            cartQty: 1
        });
        cart.totalQty = 1;
        cart.totalPrice = price;
    }
    console.log(cart);
    return cart;
}

export const removeFromCart = (product, cart) => {
    const price = product.sale_price ? product.sale_price : product.price;
    if (cart.items.length) {
        const tempProd = cart.items.filter(e => e.id === product.id);
        if (tempProd.length) {
            cart.totalQty -= 1;
            cart.totalPrice -= price;
            if (tempProd[0].cartQty !== 1) {
                cart.items = cart.items.map(e => {
                    if (e.id === product.id) {
                        e.cartQty -= 1;
                    }
                    return e;
                })
            } else {
                cart.items = cart.items.filter(e => e.id !== product.id);
                if (!cart.items.length) {
                    cart.totalPrice = 0;
                    cart.totalQty = 0;
                }
            }
        }
    } else {
        cart.totalQty = 0;
        cart.totalPrice = 0;
    }
    return cart;
}

export const deleteCart = () => {
    return {
        items: [],
        totalPrice: 0,
        totalQty: 0
    }
}

export const deleteProductFromCart = (product,cart) => {
    const price = product.sale_price ? product.sale_price : product.price;
    if(cart.items.length) {
        const tempProd = cart.items.filter(e => e.id === product.id);
        if(tempProd.length) {
            cart.totalPrice -= tempProd[0].cartQty*price;
            cart.totalQty -= tempProd[0].cartQty;
            cart.items = cart.items.filter(e => e.id !== product.id);
        }
    } else {
        cart.totalPrice = 0;
        cart.totalQty = 0;
    }
    return cart;
}