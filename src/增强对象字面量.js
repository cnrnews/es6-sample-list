
function ceateBookShop(inventory) {
    return {
        inventory,
        inventoryValue() {
            return this.inventory.reduce((total, book) =>
                total += book.price, 0);
        },
        priceForTitle(title) {
            return this.inventory.find(book =>
                book.title == title
            ).price
        }
    }
}
const inventory = [
    {
        title: 'Vue',
        price: 20
    },
    {
        title: 'React',
        price: 32
    }
]
const bookShop = ceateBookShop(inventory)
console.log(bookShop.inventoryValue())
console.log(bookShop.priceForTitle("React"))
