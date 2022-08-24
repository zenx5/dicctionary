import { useState } from 'react'
import { getWord } from '../ApiRequest'
import { DefinitionItem, FormBase, MeaningItem, ResultItem, Title } from '../components'
import { appStyle } from '../style'
import { NavLink } from 'react-router-dom'


export default function Dictionary({settings}) {

  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState([])
  const [error, setError] = useState(false)
  const [value, setValue] = useState('')

  const showEnum = settings.filter(setting=>(setting.name==='show_enum'))[0].value
  const showType = settings.filter(setting=>(setting.name==='show_type'))[0].value
  const showPron = settings.filter(setting=>(setting.name==='show_pron'))[0].value
  const showPlay = settings.filter(setting=>(setting.name==='enab_play'))[0].value
  const showExam = settings.filter(setting=>(setting.name==='show_exam'))[0].value


  const getPhonetic = ({phonetic, phonetics}, index) => {
    if(phonetics?.length>0){
      return [phonetics[index]?.text ?? phonetic ?? "", phonetics[index]?.audio ?? null ]
    }
    else if(phonetic) return [`${phonetic}`, null]
    return ["", null]
  }

  const search = async ( word = null ) => {
    const targetWord = word?.type ? value  : word
    setLoading( prevLoading => true)
    try{
      if( targetWord?.length === 0 ) throw new Error("Not work")
      const data = await getWord( targetWord )
      if( data?.title === "No Definitions Found" ){
        setResult( prevResult => ([]))
        throw new Error( data.title );
      }else{
        setResult( prevResult => (data))
        setError(prevError => (false))
      }    
    }catch( error ){
      setError(prevError => (error.message))
    }finally{
      setLoading( prevLoading => false)
    }
  }

  const clickWord = async (word) => {
    const expRegLetter = /[a-zA-Z]{1,}/
    const resultTestString = expRegLetter.exec( word )
    if( resultTestString ) {
      await setValue( prevValue => (resultTestString[0]) )
      await search(resultTestString[0]);
    }
  }

  const changeWord = (ev) => {
    if( ev.code !== 'Enter' ){
      setValue(prevValue=>ev.target.value)
    }
  }

  const styleInput = {
    padding: '8px',
    paddingLeft: '15px'
  }

  return (
    <div className="App" style={appStyle}>
      <div style={{position:'fixed', backgroundColor:'white', top:'0', height:'200px', boxShadow:'0px 0px 10px lightgray', width:'100vw', left:0}}>
        <Title tag="h1">Dictionary</Title>
        <FormBase onSearch={search} disabled={loading}>
          <input type="text" style={styleInput} placeholder='Insert Word' value={value} onChange={changeWord}/>
        </FormBase>
      </div>
      <div style={{display:'flex',margin:'50px', justifyContent:'space-around', marginTop:'220px'}}>
        {loading && <i>loading...</i>}
        {(!loading && error ) && (error)}
        {(!loading && !error && result.length>0 ) && (
          <div>
            {result.map( (element, indexResult ) => (
              <ResultItem key={indexResult} index={ showEnum ? indexResult+1 : null } word={element.word}>
                {element.meanings.map((meaning, index) =>(
                    <MeaningItem 
                        key={Math.random()}
                        typeword={ showType ? meaning.partOfSpeech : null }
                        phonetic={ showPron ? ( showPlay ? getPhonetic(element, index) : getPhonetic(element, index)[0] ) : null }>
                        {meaning.definitions.map(definition => (
                          <DefinitionItem 
                              key={Math.random()+'_'+Math.random()} 
                              definition={definition.definition} 
                              example={ showExam ? definition.example : '' } 
                              onClick={clickWord}/>
                        ))}
                    </MeaningItem>
                  ) )}
              </ResultItem> 
            ))} 
          </div>    
        )}
      </div>
      <div style={{position:'fixed', backgroundColor:'white', bottom:'0', boxShadow:'0px 0px 10px lightgray', width:'100vw', left:0}}>
        <ul style={{width:'80vw', marginLeft:'auto', marginRight:'auto', listStyle:'none'}}>
          <li><NavLink to="/configure">Configure</NavLink></li>
        </ul>
      </div>
    </div>
  );
}


