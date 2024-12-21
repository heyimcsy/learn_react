import React,{useActionState} from 'react';

async function updateName (name){
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return name
}
const UseActionState = () => {
  const [name,updateNameAction, isPending ] =  useActionState(
    async (previousName, formData) => {
      const newName = await updateName(formData.get('name'))
      return newName
    },
    ''
  )
  return (
    <form action={updateNameAction}>
      Current name is {name}
      <input name='name' />
      <button type='submit' disabled={isPending}>
        {isPending ?'Updating...': 'Update'}
      </button>
    </form>
  )
}

export default UseActionState;