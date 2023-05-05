import {StyleSheet} from 'react-native';
import THEMES from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEMES.colors.primary,
    alignItems:'center',
    paddingHorizontal:32,
  },
  logo:{
    width:120,
    height:68,
    marginTop:114,
  },
  title:{
    textAlign:'center',
    color:THEMES.colors.shape,
    fontFamily:THEMES.fonts.medium,
    fontSize:THEMES.fontSize.xl,
    marginTop:80,
  }
  
});