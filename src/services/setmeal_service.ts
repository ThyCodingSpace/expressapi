interface SetMealsDTO {
    setMealID : number;
    setMealItems : Array< string | number >
    setMealPrice : number
    setMealDescription : string
}

export const getSetmeal = async (setmealid : number) : Promise<SetMealsDTO> => {

    const data = {
        setMealID : setmealid,
        setMealItems : ['mcspicy', 'med fries', 'coke zero'],
        setMealPrice : 120.2,
        setMealDescription : "not so spicy"
    }

    return data
}