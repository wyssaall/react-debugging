# react-debugging

## Objective
Debug a React app using React Developer Tools by identifying and fixing issues with state and props.

## Issues Found

###  Undefined State (name)
Found in App component.
Cause: useState() was used without an initial value.
Fix it addidng default value:
const [name, setName] = useState("Wissal");

### Missing Props in ChildComponent
count and setCount were not passed to the child.
Fix: Updated JSX to pass props:
<ChildComponent count={count} setCount={setCount} />

## Results
State and props now display correctly in DevTools.
Button increments count as expected.
No more undefined values.
