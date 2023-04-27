import React, {useState, Suspense, useContext} from 'react';
import './App.css';
import Toolbar from './containers/header/toolbar/Toolbar';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import HomePage from '../src/pages/HomePage';
import Error404 from '../src/error-pages/Error404';
import AuthContextProvider from '../src/context/AuthContext';
import {ThemeContext} from '../src/context/theme/ThemeContext';
import StudentContextProvider from '../src/context/student/StudentContext';
import Transition from '../src/components/animation/Transition';
import Animation from '../src/components/animation/Animation';
import MixTransition from '../src/components/animation/MixTransition';

const AddStudent = React.lazy(() => import('../src/pages/AddStudent'));
const EditStudent = React.lazy(() => import('../src/pages/EditStudent'));


const App = () => {
    const themContext = useContext(ThemeContext);
    const {lightTheme, light, dark} = themContext;
    const t = lightTheme ? light : dark;

    return (
        <BrowserRouter>
            <AuthContextProvider>
                <StudentContextProvider>

                    <div className='App' style={{background: t.bg, color: t.syntax}}>
                        <Toolbar/>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Routes>
                                <Route exact path='/' element={<HomePage/>}/>
                                <Route exact path='/student/:id' element={<EditStudent/>}/>
                                <Route exact path='/add-student' element={<AddStudent/>}/>
                                <Route path='/home' element={<Navigate replace to="/"/>}/>
                                <Route path='*' element={<Error404/>}/>
                                <Route exect path='/transition' element={<Transition/>}/>
                                <Route eaxct path='/animation' element={<Animation/>}/>
                                <Route exact path='/mixTransition' element={<MixTransition/>}/>
                            </Routes>
                        </Suspense>
                    </div>

                </StudentContextProvider>
            </AuthContextProvider>


        </BrowserRouter>
    );

}

export default App;
