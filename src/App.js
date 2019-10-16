import React, { Component } from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounter3 from './components/HookCounter3';
import HookCounterArray from './components/HookCounterArray';
import HookEffectCounter from './components/HookEffectCounter';
import HookEffectMouse from './components/HookEffectMouse';
import MouseContainer from './components/MouseContainer';
import DataSource from './components/DataSource';
import { UserProvider, LevelProvider } from './components/contextComponents/ContextData';
import ComponentA from './components/contextComponents/ComponentA';
import CounterReducer1 from './components/CounterReducer1';
import CounterReducer2 from './components/CounterReducer2';
import CounterReducer3 from './components/CounterReducer3';
import ParentContext from './components/conTextWithReducer/ParentContext';
import DataFetchUseState from './DataFetching/DataFetchUseState';
import DataFetchUseReducer from './DataFetching/DataFetchUseReducer';
import ParentComponent from './components/useCallbackComponent/ParentComponent';
import Counter from './components/useMemoHook/Counter';
import UseRefFocus from './components/UseRefFocus';
import UseRefHookTimer from './components/useRefHookTimer';
import DocumentTitle from './components/DocumentTitle';
import CustomCounter from './components/CustomCounter';
import UserFormData from './components/UserFormData';

class App extends Component{
   render(){
    return(
      <div className="App">
        {/* <ClassCounter/> */}
        {/* <HookCounter/> */}
        {/* <HookCounter2/> */}
        {/* <HookCounter3/> */}
        {/* <HookCounterArray/> */}
        {/* <HookEffectCounter/> */}
        {/* <HookEffectMouse/> */}
        {/* <MouseContainer/> */}
        {/* <DataSource/> */}
        {/* <UserProvider value={'Selin'}>
          <LevelProvider value={'ComponentC Level'}>
            <ComponentA/>
          </LevelProvider>
         </UserProvider> */}
         {/* <CounterReducer1/> */}
         {/* <CounterReducer2/> */}
         {/* <CounterReducer3/> */}
         {/* <ParentContext/> */}
         {/* <DataFetchUseState/> */}
         {/* <DataFetchUseReducer/> */}
         {/* <ParentComponent/> */}
         {/* <Counter/> */}
         {/* <UseRefFocus/> */}
         {/* <UseRefHookTimer/> */}
         {/* <DocumentTitle/> */}
         {/* <CustomCounter/> */}
         <UserFormData/>
      </div>
    );
  }
}

export default App;


