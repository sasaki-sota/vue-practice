const app = Vue.createApp({
    data() {
        return {
            product: "Hello world",
            image: 'images/red.jpeg',
            inStock: false,
            details: ["1 list", "2 list", "3 list"],
            variants: [
                {
                    id: 2234,
                    color: "red",
                    image: "images/red.jpeg"
                },
                {
                    id: 2235,
                    color: "yellow",
                    image: "images/yellow.jpeg"
                },
            ],
            cart: 0,
        }
    },
    methods: {
        addToCart() {
            // this.cartはdata属性のcartをさす
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})
