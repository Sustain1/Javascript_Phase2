
window.onload = function (){

    //let ChickenMCNuggets = new Burger();
    let newOrderBox = new Order();
    let inputs = document.querySelectorAll('input');
    let li = document.querySelectorAll('li');
    console.log(inputs);
    console.log(li);
    for(let i = 0; i < inputs.length; i ++){
        inputs[i].addEventListener('change', function(){
            newOrderBox.options.cheese = true;
            newOrderBox.calc;
            newOrderBox.renderBurger;
        });
    }
}


class Burger{
    constructor(){
        this.options = {};
        this.options.big = false;
        this.options.cheese = false;
        this.options.salt = false;
        this.options.potato = false;
        this.options.spice = false;
        this.options.mayo = false;
        this.calc();
        this.renderBurger();
    }
    calcPrice(){
        let basePrice;
        if(this.options.big)
            basePrice = 100;
        else basePrice = 50;

        basePrice += this.options.cheese*10 +
                     this.options.salt*20 +
                     this.options.potato*15 +
                     this.options.spice*15 +
                     this.options.mayo*20;
        return basePrice;
    }
    calcCalories(){
        let calories;
        if(this.options.big)
            calories = 40;
        else calories = 20;
        calories += this.options.cheese*20 +
                    this.options.salt*5 +
                    this.options.potato*10 +
                    this.options.mayo*5;
        return calories;
    }
    calc(){
        console.log('calc');
        this.calcPrice();
        this.calcCalories();
    }
    setBurgerCard(){
        let isBig = this.options.big ? 'Большой' : 'Маленький';
        let isCheese;
        let isSalt;
        let isPotato;
        let isSpice;
        let isMayo;
        let isCheeseActive;
        let isSaltActive;
        let isPotatoActive;
        let isSpiceActive;
        let isMayoActive;
        if(this.options.cheese){
            isCheese = 'С сыром';
            isCheeseActive = 'active ';
        }
        else{
            isCheese = 'Без сыра';
            isCheeseActive = '';
        }

        if(this.options.salt){
            isSalt = 'С салатом';
            isSaltActive = 'active ';
        }
        else{
            isSalt = 'Без салата';
            isSaltActive = '';
        }

        if(this.options.potato){
            isPotato = 'С картошкой';
            isPotatoActive = 'active ';
        }
        else{
            isPotato = 'Без картошки';
            isPotatoActive = '';
        }
        if(this.options.spice){
            isSpice = 'Со специями';
            isSpiceActive = 'active ';
        }
        else{
            isSpice = 'Без специй';
            isSpiceActive = '';
        }
        if(this.options.mayo){
            isMayo = 'С майонезом';
            isMayoActive = 'active ';
        }
        else{
            isMayo = 'Без майонеза';
            isMayoActive = '';
        }
        return `
            <div class = 'burger'>
                <h1 class = 'burgerHeader'> BURGER</h1>
                <p class = 'burgerDescription'><strong id ='burgerSize'>${isBig}</strong> бургер</p>
                <p class = 'burgerOptionHeader'>Доп. ингредиенты:</p>
                <ul class = 'burgerOptions'>
                    <li class='${isCheeseActive}isCheese'>${isCheese}</li>
                    <li class='${isSaltActive}isSalt'>${isSalt}</li>
                    <li class='${isPotatoActive}isPotato'>${isPotato}</li>
                    <li class='${isSpiceActive}isSpice'>${isSpice}</li>
                    <li class='${isMayoActive}isMayo'>${isMayo}</li>
                </ul>
                <p class = 'calories'>Всего калорий: ${this.calcCalories()}</p>
                <p class = 'price'>Цена: ${this.calcPrice()}</p>
            </div>
        `
    }
    renderBurger(){
        console.log('render');
        document.querySelector('.orderbox').innerHTML+= this.setBurgerCard();
    }
}
class Order extends Burger{
    constructor(){
        super();
        this.setOrderBox();
        this.renderOrderBox();
    }
    setOrderBox(){
        return `
            <div class = 'order'>
                <table class = 'orderItems'>
                    <tr>
                        <td>Большой Бургер?</td>
                        <td style = 'text-align: center;'>
                            <input type="checkbox" id = 'big'>
                        </td>
                    </tr>
                    <tr>
                        <td>Добавить сыр</td>
                        <td style = 'text-align: center;'>
                            <input type="checkbox" id = 'cheese'>
                        </td>
                    </tr>
                    <tr>
                        <td>Добавить салат</td>
                        <td style = 'text-align: center;'>
                            <input type="checkbox" id = 'salt'>
                        </td>
                    </tr>
                    <tr>
                        <td>Добавить картофель</td>
                        <td style = 'text-align: center;'>
                            <input type="checkbox" id = 'patato'>
                        </td>
                    </tr>
                    <tr>
                        <td>Добавить специй</td>
                        <td style = 'text-align: center;'>
                            <input type="checkbox" id = 'spice'>
                        </td>
                    </tr>
                    <tr>
                        <td>Добавить майонез</td>
                        <td style = 'text-align: center;'>
                            <input type="checkbox" id = 'mayo'>
                        </td>
                    </tr>
                </table>
            </div>
        `
    }
    renderOrderBox(){
        document.querySelector('.orderbox').innerHTML += this.setOrderBox();
    }
}