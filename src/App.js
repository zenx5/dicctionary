import {useState} from 'react'
import { getWord } from './ApiRequest'
import {DefinitionItem, FormBase, MeaningItem, ResultItem, Title } from './components'
import {appStyle} from './style'



function App() {

  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState([])
  const [error, setError] = useState(false)
  const [value, setValue] = useState('')

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
      <Title tag="h1">Dicctionary</Title>
      <FormBase onSearch={search} disabled={loading}>
        <input type="text" style={styleInput} placeholder='Insert Word' value={value} onChange={changeWord}/>
      </FormBase>

      <div style={{display:'flex',margin:'50px', justifyContent:'space-around'}}>
        {loading && <i>loading...</i>}
        {(!loading && error ) && (error)}
        {(!loading && !error && result.length>0 ) && (
          <div>
            {result.map( (element, indexResult ) => (
              <ResultItem key={indexResult} index={indexResult+1} word={element.word}>
                {element.meanings.map((meaning, index) =>(
                    <MeaningItem 
                        key={Math.random()}
                        word={meaning.partOfSpeech}
                        phonetic={getPhonetic(element, index)}>
                        {meaning.definitions.map(definition => (
                          <DefinitionItem 
                              key={Math.random()+'_'+Math.random()} 
                              definition={definition.definition} 
                              example={definition.example} 
                              onClick={clickWord}/>
                        ))}
                    </MeaningItem>
                  ) )}
              </ResultItem> 
            ))} 
          </div>    
        )}
      </div>
    </div>
  );
}

export default App;
