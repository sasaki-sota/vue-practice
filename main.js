const app = Vue.createApp({
    data() {
        return {
            product: "Hello world",
            brand: "Souta Sasaki",
            selectedVariant: 0,
            inStock: false,
            details: ["1 list", "2 list", "3 list"],
            variants: [
                {
                    id: 2234,
                    color: "red",
                    image: "images/red.jpeg",
                    quantity: 50,
                },
                {
                    id: 2235,
                    color: "yellow",
                    image: "images/yellow.jpeg",
                    quantity: 0,
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
        updateVariant(index) {
            this.selectedVariant = index
        },
        computed: {
            title() {
                return this.brand + '' + this.product
            },
            // 最初のselectedVariant(0)を返す
            image() {
                return this.variants[this.selectedVariant].image
            },
            inStock() {
                return this.variants[this.selectedVariant].quantity
            },
        }
    }
})
