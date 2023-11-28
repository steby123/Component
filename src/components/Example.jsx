import React,{useState} from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

const Examples = () => {
    const [selectedTopic, setSelectedTopic] = useState('');

    const clickHandler = (selected) => {
      setSelectedTopic(selected);
    }
  
    let tabcontent = <p>Please select a topic.</p>
  
    if(selectedTopic){
      tabcontent = (
        <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre> 
      </div>
      )
    }

    return(
        <Section id="examples" title="Examples" >
        <Tabs 
            ButtonContainer = "menu" 
            buttons={ 
          <>
            <TabButton
              isSelected={selectedTopic === 'components'} 
              onClick={() => clickHandler('components')}>
              Components
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'jsx'} 
              onClick={() => clickHandler('jsx')}
            >
              JSX
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'props'} 
              onClick={() => clickHandler('props')}>
            Props
            </TabButton>
            <TabButton 
              isSelected={selectedTopic === 'state'} 
              onClick={() => clickHandler('state')}>
              State
            </TabButton>
          </>
        }          
          ></Tabs>
          {tabcontent}
        </Section>
    )
}

export default Examples;