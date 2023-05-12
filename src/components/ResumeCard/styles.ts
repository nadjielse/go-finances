import {StyleSheet} from 'react-native';
import THEMES from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:300,
    height:200,
    borderRadius:5,
    paddingHorizontal:26,
    paddingTop:19,
    marginRight:16,
    paddingBottom:50,
  },
  containerHeader:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  titleHeader:{
    fontSize:THEMES.fontSize.sm,
    fontFamily:THEMES.fonts.regular
  },
  containerFooter:{
    marginTop:40
  },
  textAmount:{
    fontSize:THEMES.fontSize.xl,
    fontFamily:THEMES.fonts.bold
  },
  textLastTransaction:{
    fontSize:THEMES.fontSize.xm,
    fontFamily:THEMES.fonts.regular
  }
  
});