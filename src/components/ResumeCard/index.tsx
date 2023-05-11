import {Text, View} from 'react-native';
import { Feather } from '@expo/vector-icons';

import THEMES from '../../global/styles/theme';

import {styles} from './styles';

interface Props{
  type:"out" | "entry" | "total";
  title:string;
  amount:string;
  lastTransaction:string;
  nameIcon:"arrow-down-circle" | "arrow-up-circle" |"dollar-sign";
}
export function ResumeCard({type,title,amount,lastTransaction,nameIcon}:Props){
  let corIcone = THEMES.colors.success;
  if(type=== "out"){
    corIcone = THEMES.colors.danger;
  }else if(type=== "total"){
    corIcone = THEMES.colors.shape
}
  
  return (
      <View style={[
        styles.container,
        {backgroundColor: type === 'total'?THEMES.colors.secondary:THEMES.colors.shape}
      ]}>
        <View style={styles.containerHeader}>
          <Text style={[styles.titleHeader,
            {color: type==='total'? THEMES.colors.shape: THEMES.colors.text_dark}]}
            >{title}
          </Text>
          <Feather name={nameIcon} size={24} color={corIcone}/> 
        </View>

        <View style={styles.containerFooter}>
          <Text style={[styles.textAmount,{color: type==='total'? THEMES.colors.shape: THEMES.colors.text_dark}]}>{amount}</Text>
          <Text style={[styles.textLastTransaction,{color: type==='total'? THEMES.colors.shape: THEMES.colors.text}]}>{lastTransaction}</Text>
        </View>
      </View>

  )

}