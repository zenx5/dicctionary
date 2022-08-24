import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { Dictionary, Configure } from './routes'
import { SettingItem } from './components'
 
 export default function App(){

  const [settings, setSettings] = useState([
      {
        name: "show_enum",
        label: "Show enumeration",
        value: false
      },
      {
        name: "show_type",
        label: "Show word type",
        value: false
      },
      {
        name: "show_pron",
        label: "Show pronuntiation",
        value: false
      },
      {
        name: "enab_play",
        label: "Enable play pronuntiation",
        value: false
      },
      {
        name: "show_exam",
        label: "Show examples",
        value: false
      }
  ]);

  const changeSettingValue = nameSetting => ({target}) => {
    const checked = target.checked    
    const copySettings = settings.map( setting=> {
      if( setting.name === nameSetting ) {
        setting.value = checked;
      }
      return setting;
    })
    setSettings( prevSettings => (copySettings))
  }

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/"
           element={
            <Dictionary settings={settings}>
            </Dictionary>} />
        <Route path="/configure" 
          element={
            <Configure>
                {settings.map( setting => (
                  <SettingItem 
                    key={setting.name} 
                    name={setting.name} 
                    value={setting.value}
                    onChange={changeSettingValue(setting.name)}
                    >{setting.label}
                  </SettingItem>))}
            </Configure>} />
        
      </Routes>
    </BrowserRouter>
  )

 }