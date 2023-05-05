import {StyleSheet} from 'react-native';
import THEMES from '../../global/styles/theme';

export const styles = StyleSheet.create({
  button: {
    marginTop:94,
    width:'100%',
    height:56,
    justifyContent:'center',
    alignItems:'center'
  },
  titleButton:{
    fontFamily:THEMES.fonts.bold,
    fontSize:THEMES.fontSize.sm,
  }
});