const { faker } = require("@faker-js/faker");
class ProductService{

    constructor()
    {
        this.products = [];
        this.generate();
    }


    get()
    {
        return this.products;
    }

    generate(size)
    {
        const limit = size || 10;
        for( let index = 1; index <= limit; index++){
        
            this.products.push({
                id: index,
                firstName: faker.person.firstName(),
                lastName: faker.person.lastName(),
                gender: faker.person.sexType(),
                img: faker.image.urlLoremFlickr()
            });        
        };

        return this.products;
    
    }

    find()
    {

    }

    findById(id)
    {
        return this.products.find(item => item.id == id);
    }

    delete()
    {

    }

    update()
    {

    }
}

module.exports = ProductService;