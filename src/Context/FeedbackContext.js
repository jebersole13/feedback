import {v4 as uuidv4} from 'uuid'
import {createContext, useState} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider=({children}) =>{
  const[feedback, setFeedback]= useState([
    {
    id:1,
    text:'This feedback item 1',
    rating:10
  },
  {
    id:2,
    text:'This feedback item 2',
    rating:3
  },
  {
    id:3,
    text:'This feedback item 3',
    rating:76
  },
])

const  [feedbackEdit, setFeedbackEdit] = useState({
  item:{},
  edit:false
})
//to addfeed back
  const addFeedback=(newFeedback)=>{
    newFeedback.id=uuidv4()
    setFeedback([newFeedback, ...feedback])
  }
  //Delete feedback
  const deleteFeedback=(id)=>{
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item)=>item.id !==id))
    }
    
  }

//Update feedback item

const updateFeedback =(id,upItem)=>{
  setFeedback(feedback.map((item)=>item.id === id ? {...item, ...upItem} : item))
}

//set item to be updated
  const editFeedback = (item)=>{
    setFeedbackEdit({
      item,
      edit:true
    })
  }
 return (
  <FeedbackContext.Provider
  value={{
    feedback,    
    feedbackEdit,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback
  }}>
    {children}
  </FeedbackContext.Provider>
 )
}

export default FeedbackContext