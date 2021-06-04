const app = Vue.createApp({
    data() {
        return {
            product: "Hello world",
            image: './images/test.jpeg',
            inStock: true,
            details: ["1 list", "2 list", "3 list"],
            variants: [
                {
                    id: 2234,
                    color: "red"
                },
                {
                    id: 2235,
                    color: "yellow"
                },
            ],
            cart: 0,
        }
    },
    methods: {
        addToCart() {
            // this.cartはdata属性のcartをさす
            this.cart += 1
        }
    }
})
