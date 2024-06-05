interface SetMealsDTO {
    setMealID : number;
    setMealItems : Array< string | number >
    setMealPrice : number
    setMealDescription : string
}

export const getSetmeal = async (setmealid : number) : Promise<SetMealsDTO> => {

    // your backend logic here...

    let count = 0

    for( let i = 0 ; i < 10 ; i++) {
        count += 1
    }

    const data = {
        setMealID : setmealid,
        setMealItems : ['mcspicy', 'med fries', 'coke zero'],
        setMealPrice : 120.2,
        setMealDescription : "not so spicy",
        setMealCount : count
    }

    return data
}