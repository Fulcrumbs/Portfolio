import {QueryClient , QueryClientProvider, useQuery, UseQueryResult} from '@tanstack/react-query'
import {fetchFood, fetchLogs} from './API.js'
import styles from "./HealthApp.module.css"
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import React from 'react';

const queryClient = new QueryClient();

//interface is like a blueprint for how an object should look, what keys it will have and what types those keys will be.
export interface Food{
    id: number;
    name: string;
    calories: number;
    protein: number;
    fat: number;
    carb: number;
    volume: number;
}
interface FoodQueryProp{
  query: UseQueryResult<Food[]>
  
}

// export interface FullLog{
//   AllEntries: Array<DailyTable[]>
// }
//Could be useful if I decide to use localStorage?

export interface DailyTable{
  id: string;
  rows: Row[];
  totals: Totals;
}

interface Row{
  id: number;
  name: string;
  calories: number;
  protein: number;
  fat: number;
  carb: number;
  volume: number;
  servingsize: number;
  calorietotal: number;
}

interface Totals{
  dailyProteinIntake: number;
  dailyFatIntake: number;
  dailyCarbIntake: number;
  dailyCalorieIntake: number;
}
function LoadTable(){
  //
}
function SaveTable(){

}

function AddRow({foodName} : {foodName : string}, {setFoodName} : {setFoodName : React.Dispatch<React.SetStateAction<string>>}){
    // setFoodName(foodName)
  //   const addToDailyEntry = {
  //const updatedRows = {
  // }

  // }
}

function RemoveRow(){
  //selectedRow
  //-calorie, -protein -fat and -carb totals of the selected row.
  // updatedRows = currentrows filter all row ids != to selected.id
  // ...table,
  // rows: [...updatedRows]  
}
function LogDisplay() {
  const foodQuery = useQuery({
    queryKey: ['foodData'],
    queryFn: fetchFood
  })  
  const logQuery = useQuery({
    queryKey: ['tableLogs'],
    queryFn: fetchLogs
  })
  const date = new Date()
  const todaysDate = date.toLocaleDateString()
  const [currentTable, setCurrentTable] = useState('')
  const displayTable = logQuery.data?.find(table => table.id === currentTable)

  useEffect(() => {
    LoadTable() //setCurrentTable(table)
  },[])

  let newTableTotals = {
    dailyProteinIntake: 0,
    dailyCarbIntake: 0,
    dailyFatIntake: 0,
    dailyCalorieIntake: 0
  }

  let rows = 1;
  
  
  return(
    <div className={styles.page}>
      {logQuery.data?.map((element, index) =>(
       <select id={String(index)} onChange={(e) => setCurrentTable(e.target.value)}>{element.id}</select>
      )
    )}
      <table id={displayTable?.id || todaysDate}>
      <ColumnTitles date={displayTable?.id || todaysDate}/>
        {displayTable?.rows.map((row, index) => 
          <InputRow props={{query: foodQuery}}/>) || <InputRow props={{query: foodQuery}}/>} 
      <ColumnTotals totals={displayTable?.totals || newTableTotals}/>
      </table>
    </div>
  )
}
//todo create a way to duplicate input field, cloneElement is not recommended. 'Not found' if not in database. function quantity*values
//todo make inputrow display at least min 1 row and able to display the loaded table rows.

function ColumnTitles({date}: {date:string}){
  const columnTitles = ['Consumable', 'Serving Size(g/mls)', 'Servings','Calories', 'Protein', 'Fat', 'Carb', 'Calorie Total']
  return(
  <thead>
    <p>{date}</p>
    <tr className={styles.tableRow}>
      {columnTitles.map(title =>
        <td>{title}</td>
      )}
    </tr>
  </thead>
  )
}

function ColumnTotals({totals} : {totals : Totals}){
  return(
  <>
  <tr className={styles.tableRow}>
    <td></td>
    <td></td>
    <td></td>
    <td>Protein Total: {totals.dailyProteinIntake}</td>
    <td>Fat Total: {totals.dailyFatIntake}</td>
    <td>Carb Total: {totals.dailyCarbIntake}</td>
    <td></td>
    <td>Daily Calorie Total: {totals.dailyCalorieIntake}</td>
  </tr>
  </>
  )
}

function consumableInfo({item}: {item: Food} ){
  //This is going to replace my current layout to make the table more succinct, if users are curious about how much an individual item contains.
  return(
    <p> Each {item.name} contains: {item.calories} Calories, {item.protein}gs of Protein, etc etc</p>
  )
}

function CreateDailyTable(dailyLog: DailyTable){
  //query dailyLog
  //IF id (which will have a date timestamp) != to date.now.currentdateformat
  //Add rows to new dailytable
  /** 
 * columnTitles
 * rows
 * columnTotal
*/
  const [entry, setEntry] = useState({
    id: Date(),
    table: {
      rows: []
    }
  })
}


// const [entry, setEntry] = useState([])
// const [selectedRow, setSelectedRow] = useState()

function InputRow({props} : {props : FoodQueryProp}){
  const [foodName, setFoodName] = useState('')
  const foodItem = props.query.data?.find(food => food.name === foodName);
  const [calorieTotal, setCalorieTotal] = useState(0)
  return(
    <>
    <datalist id='foodDatabase'>
      {props.query.data?.map((food) => (
        <option key={food.id}>
          {food.name}
        </option>
      ))}
    </datalist>
    
    <tr className={styles.tableRow}>
      <td><input name='foodname' type='text' list='foodDatabase' onChange={(e) => setFoodName(e.target.value)}/></td>
      {foodItem === undefined ? <td>Not Found </td>: (
        <React.Fragment key={foodItem?.id}>
          <td>{foodItem.volume}</td>
          <td><input name='quantity' type='number' onChange={(e) => (setCalorieTotal(Math.round(foodItem.calories * e.target.valueAsNumber)))}/></td>
          <td>{foodItem.calories}</td>
          <td>{foodItem.protein}</td>
          <td>{foodItem.fat}</td>
          <td>{foodItem.carb}</td>
          <td>{calorieTotal}</td>
        </React.Fragment> 
      )}
    </tr>
    </>
  )
}

export default function DietLog() {
  return(
    <QueryClientProvider client={queryClient}>
      <LogDisplay/>
    </QueryClientProvider>
  )
}

/**
 * Replicate the diet log in my obsidian vault.
 * Probably just have it be automatic for certain foods: Get request will send food and retrieve the per 100g value and nutritional values.
 * convert entered amount into calories based on standard in database.
 * So if I enter 200g of banana, the search will look for banana, use bananas per 100g value 200/100g then in each of the columns * by the result.
 * Fudge some numbers so 100g of banana will be 70 calories 1g Protein, 20Carbs and 1g Fat.
 * I enter 200g of bananas. 200/100 = 2. 70*2 = 140. 1*2 = 2, 20*2=40 and 1*2=2.
 * I enter 50g Bananas. 50/100 = 0.5. 70*0.5=35 1*0.5=0.5, 20*0.5=10 and 1*0.5=0.5.
 * const multiplier = userAmount/databaseAmount
 * const finalValue = columnValue*multiplier
 * GET all values where name equals userInput
 *todo: 
 */
{/* <datalist id='AllLogs'>
      {logQuery.data?.map((log, index) => (
        <option key={index}>
          {log.id.toString()}
        </option>
      ))}
      </datalist> */}