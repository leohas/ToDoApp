import React, { useState, useEffect } from 'react'
import { ContainerForm, ContentForm } from '../globalStyles'
import TextField  from '@material-ui/core/TextField';
import { 
    AddToDoContainer, 
    ToDosContainer, 
    UlToDo, 
    DivLiTodo, 
    ToDoEmpty,
    LogOutButton 
} from './styles'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add'
import { useHistory } from 'react-router';
import { addTodo } from '../../services/hooks/addTodo';
import { signUserOut } from '../../services/hooks/signUserOut'
import { getCurrentUser } from '../../services/hooks/getCurrentUser';
import { getUserToDos } from '../../services/hooks/getUserToDos';

function ToDoPage() {
    const [titleToDo, setTitleToDo] = useState('');
    const [descriptionToDo, setDescriptionToDo] = useState('')
    const [toDoState, setToDoState] = useState<any[]>([])
    const [errorState, setErrorState] = useState(0)
    const history = useHistory()

    useEffect(() => {
        const getToDos =  async() => {
            const toDos = await getUserToDos(getCurrentUser())
            setToDoState(toDos)
        }
        getToDos()
    }, toDoState)

    const handleTitleToDo = (event: any) => {
        setTitleToDo(event.target.value)
    }

    const handleDescriptionToDo = (event: any) => {
        setDescriptionToDo(event.target.value)
    }   

    const handleAddToDo = async() => {
        if(titleToDo !== '' && descriptionToDo !== '') {
            setErrorState(0)
            const newToDos = await addTodo(titleToDo, descriptionToDo, getCurrentUser())
            setToDoState(newToDos)
        } else {
            setErrorState(1)
        }
    }

    const handleSignOutButton = () => {
        signUserOut().then(() => {
            const path = '/'
            history.push(path)
        })
    }

    return (
       <ContainerForm>
           <ContentForm style=
                {
                    { 
                    height: "80vh", 
                    width:"40%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    }
                }
            >
               <h1>Welcome to your ToDos!</h1>
               <LogOutButton onClick={handleSignOutButton}>Logout</LogOutButton>
               <p style={{opacity: errorState, color: "#F00"}}>The fields can't be empty!</p>
               <AddToDoContainer>
                <TextField 
                    id="standard-basic" 
                    label="Add a title"
                    style={{marginRight: "30px",}}
                    onChange = {handleTitleToDo}
                />
                    <TextField 
                    id="standard-basic" 
                    label="Add a description"
                    onChange = {handleDescriptionToDo}
                />
                <Fab
                    style={{marginLeft: "35px"}}
                    size="small"
                    color="primary" 
                    aria-label="add"
                    onClick={() => handleAddToDo()}
                    >
                    <AddIcon />
                </Fab>
               </AddToDoContainer>
               <ToDosContainer>
                   <UlToDo>
                   {toDoState.length > 0 ? toDoState?.map(item => (
                       <DivLiTodo>
                            <li key={item.title} style={{paddingLeft: "40px"}}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </li>
                        </DivLiTodo>
                    )): (<ToDoEmpty>
                            <h2>There's no ToDos currently. Add some!</h2>
                        </ToDoEmpty>)}

                   </UlToDo>
               </ToDosContainer>
           </ContentForm>
       </ContainerForm>
    )
}

export default ToDoPage