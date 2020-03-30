import {lightTheme, darkTheme} from '../styled';
const themeReducer = (state=darkTheme, {type})=> {
    switch(type){
        case 'SWITCH_MODE':
            let newTheme=(state.name==="light")? darkTheme: lightTheme;
            console.log(newTheme);
            return newTheme
        default:

            return state;
    }
};
export default themeReducer;