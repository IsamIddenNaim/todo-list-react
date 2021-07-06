import React from 'react';
import {useState,useRef} from "react";
import Button from '@material-ui/core/Button';
import "./todo.css"
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 1080,
    backgroundColor: theme.palette.background.paper,
    margin:"auto"
  },
  inputTodo:{
      width:"100%",
      marginTop:30,
      maxWidth:1080,
      paddingLeft:14,
  },
  button: {
    margin: theme.spacing(1),
  },
  textInput:{
    width:"90%"
  }
}));

export default function TodoList() {
  const classes = useStyles();
  const [newTodo,setNewTodo] = useState("");
  const [todos,setTodos] = useState([])
  const [checked, setChecked] = useState([]);
  const addTodo = ()=>{
    setTodos([...todos,newTodo]);
    setNewTodo("")
  }
  const deletTodo = (item)=>{
    setTodos(todos.filter(x=>x !== item))
  }
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div className={classes.root}>
    <h1 className="text-center" style={{marginTop:"70px"}}>Todo List</h1>
    <List className={classes.root}>
      {todos.map((item) => {
        const labelId = `checkbox-list-label-${todos.indexOf(item)}`;

        return (
          <ListItem key={todos.indexOf(item)} role={undefined} dense button onClick={handleToggle(todos.indexOf(item))}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(todos.indexOf(item)) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`${todos.indexOf(item) + 1}- ${item}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={()=>{
                deletTodo(item)
              }}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
    {todos.length<1&&<h2 className="text-center">there is no items</h2>}
    <div className={classes.inputTodo}>
    <TextField
        className={classes.textInput}
          value={newTodo}
          id="outlined-textarea"
          label="New Todo"
          placeholder="write here"
          multiline
          variant="outlined"
          onChange={(e)=>{
            setNewTodo(e.target.value)
          }}
        />
    <Button
        variant="contained"
        color="primary"
        className={classes.button}
        disabled={!(newTodo)}
        onClick={()=>{
          addTodo()
        }}
      >
        add
      </Button>

    </div>
    
    </div>
  );
}