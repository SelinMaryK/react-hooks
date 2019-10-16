import React, {useState, useCallback} from 'react'
import Title from './Title';
import Count from './Count';
import Button from './Button';

function ParentComponent() {
    const [age, setAge] =  useState(18);
    const [salary, setSalary] = useState(30000);
    const incrementAge = useCallback(() =>{
        setAge(age+1);
    },[age])

    const incrementSal = useCallback((prevState) =>{
        setSalary(prevState + 100);
    },[salary])

    console.log(`Render--Parent Comp `)
    return (
        <div>
            <Title/>
            <Count text='Age'>{age}</Count>
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text='Salary'>{salary}</Count>
            <Button handleClick={incrementSal}>Increment Salary</Button>
        </div>
    )
}

export default ParentComponent
