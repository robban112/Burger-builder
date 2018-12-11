import React, { Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuilderControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 5,
    meat: 100,
    bacon: 50,
    cheese: 10
}

class BurgerBuilder extends Component {
    
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        },
        totalPrice: 100
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    removeIngredientHandler = (type) => {
        const updatedIngredients = {
            ...this.state.ingredients
        }
        const oldCount = this.state.ingredients[type];
        if (oldCount > 0) {
            const newCount = oldCount - 1;
            updatedIngredients[type] = newCount;
            const priceSubtraction = INGREDIENT_PRICES[type];
            const newPrice = this.state.totalPrice - priceSubtraction;
            this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        }
    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuilderControls 
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;