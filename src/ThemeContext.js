import {useState,useContext,createContext} from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState('light');
    return (
        <ThemeContext.Provider values={[theme,setTheme]}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useTheme = () => useContext(ThemeContext);
