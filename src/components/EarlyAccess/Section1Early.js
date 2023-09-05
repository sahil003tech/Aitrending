import {useEffect,React} from 'react'
import ScriptLoaderHOC from '../../ScriptLoaderHOC';
import JotformEmbed from 'react-jotform-embed'


const Section1Early = () => {

    // const URL = "https://form.jotform.com/jsform/232464019935156" //embed URL
  return (
    <div 
    // style={{height:'2000px'}}
     >
        
<JotformEmbed 
// style={{height:'2000px'}}
 src="https://form.jotform.com/232464019935156?nojump" />

{/* <iframe id="JotFormIFrame-203010538198249" title="Medivor - COVID 19 Questionnaire" onDISABLEDload="window.parent.scrollTo(0,0)" allowtransparency="true" allowfullscreen="true" allow="geolocation; microphone; camera" src="https://form.jotform.com/jsform/232464019935156" frameborder="0" style={{ minWidth: '100%', height:'5450px', border:'none'}} scrolling="no" sandbox="allow-forms allow-scripts allow-same-origin allow-top-navigation allow-popups allow-popups-to-escape-sandbox"> </iframe> */}

         </div>
  )
}

export default Section1Early