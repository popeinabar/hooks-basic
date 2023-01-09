

import React, { useEffect, useState } from 'react'

function Content() {
    const [state, setState] = useState(false);

    
useEffect(()=>{
  alert('Counter is clicked!!!')
},[state])
  return (
    <div>
      {state && <h4>Like a scene in a movie or a verse in a song, paragraphs are the building blocks of any good piece of writing. Paragraphs lend a natural rhythm to your writing that makes it a joy to read. The question is, how do you handle them successfully? 

Below, we take a close look at what makes up an effective paragraph and explain how to write one that suits your needs. We also cover some advanced tips. But first, let’s start with the fundamentals.</h4>}
        <button onClick={()=>setState(!state)}>Counter</button>
    </div>
  )
}

export default Content